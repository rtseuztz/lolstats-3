'use client'
import { use } from "react";

async function fetchSummoner(name: string, region: string): Promise<any> {
    const res = await fetch(`/api/summoner/${region}/${name}`)
    console.log(name)
    console.log(region);
    const json = await res.json();
    console.log(json);
    return json
}

export default function Home({ params }: any) {
    const res = use(fetchSummoner(params.name, params.region))
    console.log(res);
    return (
        <main>
            <div>
                <h1>Summoner</h1>
            </div>
        </main>
    )
}
