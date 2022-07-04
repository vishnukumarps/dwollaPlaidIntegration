const express = require('express')
const routerPlaid =express.Router()

const {createPublicToken,createAccessToken,choosingAccountIdforProcessorToken,createProcessorToken}=require("../contoller/plaidApiContoller")



routerPlaid.post('/createPublicToken',createPublicToken)
routerPlaid.post('/createAccessToken',createAccessToken)
routerPlaid.post('/choosingAccountIdforProcessorToken',choosingAccountIdforProcessorToken)
routerPlaid.post('/createProcessorToken',createProcessorToken)




module.exports = routerPlaid