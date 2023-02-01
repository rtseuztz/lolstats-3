import * as mysql from 'mysql2/promise'


export default async function query(query: string, values: any[]): Promise<any> {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "pass",
        database: 'lolstats'
    });
    var retVal: any = null
    try {
        console.log(query)
        const [rows, fields] = await connection.execute(query, values)
        retVal = rows;
    } catch (e) {
        retVal = e;
    } finally {
        await connection.end()
        return retVal;
    }
    // values.forEach((v) => v = values.toString())
    // let conn;
    // try {
    //     console.log("a")
    //     const pool = mariadb.createPool({
    //         host: 'localhost',
    //         port: 3306,
    //         user: 'root',
    //         password: 'pass',
    //         database: "lolstats",
    //     });
    //     conn = await pool.getConnection();
    //     const rows = await conn.query(query, values);
    //     return rows;
    // } catch (err) {
    //     throw err;
    // } finally {
    //     if (conn) return conn.end();
    // }
}