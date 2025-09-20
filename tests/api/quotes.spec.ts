import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { validateQuotesSchema } from '../helpers/schemaValidator';

dotenv.config();

test('GET /api/quotes returns quotes', async ({ request }) => {
    await test.step('Send GET /api/quotes request', async () => {
        const res = await request.get('/api/quotes');
        expect(res.status()).toBe(200);

        const body = await res.json();
        console.log(body.quotes);

        await test.step('Validate schema', async () => {
            expect(validateQuotesSchema(body), 'Schema validation failed').toBe(true);
        });

        await test.step('Sanity check: quotes is an array and not empty', async () => {
            expect(Array.isArray(body.quotes)).toBe(true);
            expect(body.quotes.length).toBeGreaterThan(0);
        });
    });
});
