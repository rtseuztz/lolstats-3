'use client'
import { Participant } from "@/pages/riot/match/matches";
import { summonerT } from "@/pages/riot/summoner/summoner";
import { use, useEffect, useState } from "react";

async function fetchGames(summoner: summonerT, region: string): Promise<Participant[]> {
    const res = await fetch(`/api/participant/${region}/${summoner.puuid}`)
    const json = await res.json();
    console.log(json);
    return json
}
async function fetchSummoner(name: string, region: string): Promise<summonerT> {
    const res = await fetch(`/api/summoner/${region}/${name}`)
    const json = await res.json();
    console.log(json);
    return json
}

const DataComponent = (params: any) => {
    // const res = use(fetchSummoner(params.name, params.region))
    // if (res) {
    //     setSummoner(res)
    // }
    const summoner = use(fetchSummoner(params.name, params.region))
    if (summoner) {
        const participants = use(fetchGames(summoner, params.region))
    }
    // if (summoner)
    //     getGames()
    return (
        <main>
            <div>
                <h1>{summoner?.name || "404"}</h1>
            </div>
        </main>
    )
}
export default DataComponent