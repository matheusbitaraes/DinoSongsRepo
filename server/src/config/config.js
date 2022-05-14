module.exports ={
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'dinostab',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASS || 'admin',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './dinostab.sqlite'
        },
        url:'postgres://root:root@localhost:5432/dinostab'
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
