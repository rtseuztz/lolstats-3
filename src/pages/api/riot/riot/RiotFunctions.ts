export function buildQuery(query: string, values: string[], region: string): string {
    query = query.replace("{REGION}", region)
    values.forEach((str, index) => {
        query = query.replace(`{${index}}`, str)
    })
    return query
}
export async function riotFetch(query: string): Promise<Response> {
    const res = await fetch(query, {
        headers: {
            "X-Riot-Token": ""//`${process.env.API_KEY}`
        }
    })
    return res;
}
export type err = {
    message: string,
    status_code: number
}