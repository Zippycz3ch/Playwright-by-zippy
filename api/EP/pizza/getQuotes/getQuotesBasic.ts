import { schema } from "../../../schemas/quotes";
import { sendRequestAsync } from "../../../helpers/sendRequestAsync";
import { getRequestHeader } from "../../../common/headers";
import { UserData } from "../../../models/UserData";
import { check200, Duration } from "../../../common/checks";

export async function getQuotes(userData: UserData) {
    const endpoint = 'api/quotes';
    const method = 'GET';
    const headers = getRequestHeader(userData);
    const body = undefined;

    const result = await sendRequestAsync(
        method,
        endpoint,
        headers,
        body
    );

    check200(result, schema, Duration.short);

    return result;
};
