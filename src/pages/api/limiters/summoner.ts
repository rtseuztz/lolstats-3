import limiter from "./rate-limiter";

const summonerLimiter = new limiter(1, 1)

export default summonerLimiter