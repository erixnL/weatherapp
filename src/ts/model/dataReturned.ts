import { showInvalidError } from "../lib/errorMsg";
export async function returnApiInfo(targetUrl:string) {
    try {
        const response: Response = await fetch(targetUrl);
        const returnedInfo = await response.json();
        return returnedInfo;
    } catch(error) {
        showInvalidError();
    }
}