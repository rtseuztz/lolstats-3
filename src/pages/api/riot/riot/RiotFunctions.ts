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
export const SUMMONER_REGIONS = {
    NA1: "na1",
    BR1: "br1",
    EUN1: "eun1",
    EUW1: "euw1",
    JP1: "jp1",
    KR: "kr",
    LA1: "la1",
    LA2: "la2",
    OC1: "oc1",
    PH2: "ph2",
    RU: "ru",
    SG2: "sg2",
    TH2: "th2",
    TR1: "tr1",
    TW2: "tw2",
    VN2: "vn2"
}
export const MATCH_REGIONS = {
    AMERICA: "americas",
    ASIA: "asia",
    EUROPE: "europe",
    OCEANIA: "sea",
}