const {MongoClient} = require('mongodb');

let dbConnection
module.exports={
    connectToDb :(cb) => {
        MongoClient.connect(process.env.MONGO_URI).
        then(client => {
        dbConnection = client.db()
        return cb()
        })
        .catch(error => {
            console.log(error)
            return cb(error)
        })
    },
    getDb : () => dbConnection
}