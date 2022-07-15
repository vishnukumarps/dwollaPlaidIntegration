const mongoose = require("mongoose")
const TransHistorySchema = new mongoose.Schema({
    
    previousState:{
            type:String
    },
    currentState:{
        type:String
    },
    finalState:{
        type:String
    }

})

const TransHistory=mongoose.model('TransHistory',TransHistorySchema)
module.exports ={TransHistory}