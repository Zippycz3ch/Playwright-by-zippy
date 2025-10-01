// tests/API/quotesRefactor.spec.ts
import { test, expect } from '@playwright/test';
import { sendRequestAsync } from '../../api/helpers/sendRequestAsync';

test('GET /api/doughs - returns doughs - basic', async () => {
    const expectedDuration = 800;

    const method = 'GET';
    const endpoint = 'api/doughs';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer abcdef0123456789`,
    };
    const body = undefined;

    const result = await sendRequestAsync(method, endpoint, headers, body);

    expect(result.response.status, 'Expected status code 200').toBe(200);
    expect(result.duration, `Expected response time < ${expectedDuration}ms, got ${result.duration}ms`).toBeLessThan(expectedDuration);

});
