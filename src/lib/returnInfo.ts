//model
//return data
import { mainURL } from "./urlConstructor";
import { WeatherInfo } from "./interface";

export async function returnApiInfo(): Promise<WeatherInfo[]> {
    const response: Response = await fetch(mainURL);
    const returnedInfo: WeatherInfo[] = await response.json();
    return returnedInfo;
}