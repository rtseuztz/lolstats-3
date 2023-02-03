import { SUMMONER_REGIONS } from '@/pages/riot/riot/RiotFunctions'
import React from 'react'
import './globals.css'
import SearchBar from './searchBar'
import styles from './page.module.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const regions = Object.keys(SUMMONER_REGIONS).map((key) => {
    return <option value={key}>{key}</option>
  })
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={styles.grid}>
          <h1>LOLStats</h1>

          <SearchBar />
          {children}
        </div>

      </body>
    </html>
  )
}
