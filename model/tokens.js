const mongoose = require("mongoose")
const tokenSchema = new mongoose.Schema({
    
    publicToken:{
        type :String
       
    },
    accessToken:{
        type:String
        
    },
    accounts:{
        type:Object
    },
    processorToken:{
        type:String
    }

})

const Tokens=mongoose.model('Tokens',tokenSchema)
module.exports ={Tokens}