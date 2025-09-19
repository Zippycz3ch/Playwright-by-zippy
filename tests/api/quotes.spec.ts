import { test, expect, request } from '@playwright/test';

const BASE_URL = "http://localhost:3333";
const TOKEN = process.env.PIZZA_TOKEN || "abcdef0123456789";


test('GET /api/quotes returns quotes', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/quotes`, {
        headers: {
            'Authorization': `Token ${TOKEN}`,
        },
    });

    expect(res.status(), 'GET /api/quotes status is 200').toBe(200);

    const body = await res.json();
    console.log(body.quotes);

    expect(Array.isArray(body.quotes), 'GET /api/quotes is array').toBe(true);
    expect(body.quotes.length, 'GET /api/quotes is not empty').toBeGreaterThan(0);
});
