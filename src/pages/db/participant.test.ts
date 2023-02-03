import participant from "./participant"

describe('testing getting summoner from db', () => {
    test('rtseuztz', async () => {
        const puuid = "J2B4drP4xCTa9DmJkIG_y2i_ht59W4tUmOmUBBg20GKczRSwWuPke_2ReIbEkUsED5_oKf1EE8JhXg"
        const p = await participant.getByPUUID(puuid)
        expect(p).toBeTruthy()
        expect(p.length).toBeGreaterThan(0)
    })
})