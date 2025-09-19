import { test, expect, request } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || "http://localhost:3333";
const TOKEN = process.env.PIZZA_TOKEN || "abcdef0123456789";

test('Pizza recommendation', async ({ request }) => {
    const restrictions = {
        maxCaloriesPerSlice: 500,
        mustBeVegetarian: false,
        excludedIngredients: ["pepperoni"],
        excludedTools: ["knife"],
        maxNumberOfToppings: 6,
        minNumberOfToppings: 2,
    };

    const res = await request.post(`${BASE_URL}/api/pizza`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`,
            'Accept': 'application/json',
        },
        data: restrictions,
    });

    expect(res.status(), 'status is 200').toBe(200);

    const body = await res.json();

    expect(body).toHaveProperty('pizza');
    expect(body.pizza).toHaveProperty('name');

    if (body.pizza && body.pizza.name) {
        console.log(`${body.pizza.name} (${body.pizza.ingredients.length} ingredients)`);
    } else {
        console.log("No pizza recommendation received. Body:", body);
    }
});
