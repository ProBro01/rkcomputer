import mongoose from "mongoose";

export async function connectToDB(URI){
    await mongoose.connect(URI, {
        dbName : "Rkcomputer",
        autoCreate : true
    }).then(() => {
        console.log('\x1b[32mSuccessfully Connected To Database!\x1b[0m')
    }).catch((err) => {
        console.log(err)
    })
    var db = mongoose.connection
    db.on('error', (err) => {
        console.log(err)
    })
    db.on('disconnect', (err) => {
        console.log('Disconnected To Database!')
        console.log(err)
    })
}