const express = require('express')
const routerDwolla =express.Router()

const {createCustomer,createTransfer,addingBankAndMakingAuth}=require("../contoller/dwollaController")

routerDwolla.post('/createCustomer',createCustomer)
routerDwolla.post('/addingBankAndMakingAuth',addingBankAndMakingAuth)
routerDwolla.post('/createTransfer',createTransfer)





module.exports = routerDwolla