import limiter from "@/pages/api/limiters/rate-limiter";
import { err } from "./RiotFunctions";

export default interface IRiot {
    /**
     * This should have missing values as {0}, {1}, ...
     */
    query: string
    values: string[]
    readonly region: string
    /**
     * 
     * @returns The JSON of the object with a null error, or a null JSON with an error object.
     */
    execute: () => Promise<[any, err | null]>;
}
