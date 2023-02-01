import { summonerT } from "@/pages/riot/summoner/summoner";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<summonerT>
) {
    res.status(200).json({ name: 'John Doe' })
}