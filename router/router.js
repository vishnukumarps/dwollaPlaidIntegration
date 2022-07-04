const express = require('express')
const routerDwolla =express.Router()

const {createCustomer,createTransfer,addingBankAndMakingAuth}=require("../contoller/dwollaController")

routerDwolla.post('/createCustomer',createCustomer)
routerDwolla.post('/addingBankAndMakingAuth',addingBankAndMakingAuth)
routerDwolla.post('/createTransfer',createTransfer)



// const {publicAcessTokenRequest,processorTokenRequest} = require("../service/plaidController")

// routerDwolla.post('/addingCustBankDetails',addingCustBankDetails)
// routerDwolla.post('/createLinkTokenNew',createLinkTokenNew)
// routerDwolla.post('/publicAcessTokenRequest',publicAcessTokenRequest)
// routerDwolla.post('/processorTokenRequest',processorTokenRequest)



module.exports = routerDwolla