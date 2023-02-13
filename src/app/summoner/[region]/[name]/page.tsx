
import { Participant } from "@/pages/riot/match/matches";
import { summonerT } from "@/pages/riot/summoner/summoner";
import DataComponent from "./data";

export default function Home({ params }: any) {
    return (
        <main>
            <div>
                <h1>Summoner</h1>
                <div>
                    <DataComponent name={params.name} region={params.region} />
                </div>
            </div>
        </main>
    )
}
