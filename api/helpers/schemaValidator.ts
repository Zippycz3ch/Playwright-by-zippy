import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

// Define schema for GET /api/quotes
const quoteSchema = {
    type: "object",
    properties: {
        quotes: {
            type: "array",
            items: { type: "string" },
            minItems: 1,
        },
    },
    required: ["quotes"],
    additionalProperties: false,
};

export function validateQuotesSchema(data: unknown): boolean {
    const validate = ajv.compile(quoteSchema);
    const valid = validate(data);

    if (!valid) {
        console.error("Schema validation errors:", validate.errors);
    }

    return valid as boolean;
}
