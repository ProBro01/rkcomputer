export async function asyncErrorHandler(callback){
    try{
        console.log("handling")
        await callback()
    }
    catch(err){
        console.log("error")
        console.log(err)
    }
}