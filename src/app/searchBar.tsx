'use client'
import { useEffect, useRef, useState } from "react"
import Router, { useRouter } from 'next/navigation'
import React from "react"
import { SUMMONER_REGIONS } from "@/pages/riot/riot/RiotFunctions"
import { summoner } from "@/pages/riot/summoner/summoner"

export default function SearchBar() {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [region, setRegion] = useState<string>("na1")
    const checkSubmit = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            router.push(`/summoner/${region}/${name}`)
        }
    }
    const input = (e: any) => {
        const element = e.target as HTMLInputElement
        setName(element.value);
    }
    const regions = Object.keys(SUMMONER_REGIONS).map((key) => {
        return <option value={SUMMONER_REGIONS[key]}>{key}</option>
    })
    useEffect(() => {
        setName(document.querySelector("input")?.value || "")
        setRegion(document.querySelector("select")?.value || "")
    })
    return (
        <>
            <select onChange={e => setRegion}>
                {regions}
            </select>
            <input onInput={input} onKeyDown={(e: any) => checkSubmit(e)} placeholder="Summoner name..."></input>
        </>
    )
}