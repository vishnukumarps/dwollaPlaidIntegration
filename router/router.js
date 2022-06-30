const express = require('express')
const routerDwolla =express.Router()

const {createCustomer,createTransfer,addingBankAndMakingAuth}=require("../contoller/dwollaController")
// const {publicAcessTokenRequest,processorTokenRequest} = require("../service/plaidController")


routerDwolla.post('/createCustomer',createCustomer)
// routerDwolla.post('/addingCustBankDetails',addingCustBankDetails)
routerDwolla.post('/addingBankAndMakingAuth',addingBankAndMakingAuth)
routerDwolla.post('/createTransfer',createTransfer)

// routerDwolla.post('/createLinkTokenNew',createLinkTokenNew)


// routerDwolla.post('/publicAcessTokenRequest',publicAcessTokenRequest)
// routerDwolla.post('/processorTokenRequest',processorTokenRequest)



module.exports = routerDwolla