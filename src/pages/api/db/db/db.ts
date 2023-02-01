import * as mariadb from 'mysql2'
// const pool = mariadb.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'pass',
//     database: "lolstats",
// });
// pool.getConnection()

// export default async function query(query: string, values: any[]): Promise<any> {
//     values.forEach((v) => v = values.toString())
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query(query, values);
//         return rows;
//     } catch (err) {
//         throw err;
//     } finally {
//         if (conn) return conn.end();
//     }
// }
const pool = mariadb.createPool({
    connectionLimit: 100,
    host: 'ad7012474865',
    user: 'root',
    password: "pass",
    database: "lolstats",
    multipleStatements: true
})

export default async function query(query: string, values: any[]): Promise<any> {
    return new Promise((res, rej) => {
        pool.getConnection(function (err, connection) {
            if (err)
                rej(err);

            res('We successfully connected to the database');
        })
    })
}