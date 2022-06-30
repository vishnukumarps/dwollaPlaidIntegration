const { Configuration, PlaidApi,PlaidEnvironments,ProcessorTokenCreateRequest } = require('plaid');
const { Tokens } = require("../model/tokens")


const PLAID_CLIENT_ID = '62a30605787ab8001324575d';
const PLAID_SECRET = 'c8eecc45cd764363a91f257aff28bf';
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';


const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
})






const client = new PlaidApi(configuration);


// const createLinkTokenNew = async (req, res) =>{
//         const configs = {
//           user: {
//             // This should correspond to a unique id fo.r the current user.
//             client_user_id: 'user-id',
//           },
//           client_name: 'Plaid Quickstart',
//           products: PLAID_PRODUCTS,
//           country_codes: PLAID_COUNTRY_CODES,
//           language: 'en',
//         };

//         if (PLAID_REDIRECT_URI !== '') {
//           configs.redirect_uri = PLAID_REDIRECT_URI;
//         }

//         if (PLAID_ANDROID_PACKAGE_NAME !== '') {
//           configs.android_package_name = PLAID_ANDROID_PACKAGE_NAME;
//         }
//         console.log("hii")
//         const createTokenResponse = await client.linkTokenCreate(configs);
//         // prettyPrintResponse(createTokenResponse);
//         res.json(createTokenResponse.data);
//         console.log(createTokenResponse.data)

//   };



const publicAcessTokenRequest = async (req, res) => {
  const tokens = new Tokens()
  const publicTokenRequest = {
    institution_id: 'ins_4',
    initial_products: ['transactions']
  };
  try {

    const publicTokenResponse = await client.sandboxPublicTokenCreate(
      publicTokenRequest
    );
    // console.log("PublicToken",publicTokenResponse.data.public_token)
    const publicToken = publicTokenResponse.data.public_token;
    // The generated public_token can now be exchanged
    // for an access_token
    tokens.publicToken = publicTokenResponse.data.public_token

    const exchangeRequest = {
      public_token: publicToken,
    };
    const exchangeTokenResponse = await client.itemPublicTokenExchange(
      exchangeRequest,
    );
    const accessToken = exchangeTokenResponse.data.access_token;
    tokens.accessToken = exchangeTokenResponse.data.access_token;
    // console.log(exchangeTokenResponse)

    const request = {
      access_token: accessToken,
    };
    const response = await client.accountsGet(request);
    const accounts = response.data.accounts;
    tokens.accounts = response.data.accounts;
    console.log(accounts)
    tokens.save()

    // console.log("Acess Token",exchangeTokenResponse)
    res.send(`accessToken:${accessToken}`)
  }
  catch (error) {
    console.log(error)
  }
}





const processorTokenRequest = async (req, res) => {

  // const tokens = new Tokens()


  const publicTokenRequest = {
    institution_id: 'ins_1',
    initial_products: ['transactions']
  };


  try {

    const publicTokenResponse = await client.sandboxPublicTokenCreate(
      publicTokenRequest
    );
    // console.log("PublicToken",publicTokenResponse.data.public_token)
    const publicToken = publicTokenResponse.data.public_token;
    // The generated public_token can now be exchanged
    // for an access_token
    // tokens.publicToken =publicTokenResponse.data.public_token



    const exchangeRequest = {
      public_token: publicToken,
    };
    const exchangeTokenResponse = await client.itemPublicTokenExchange(
      exchangeRequest,
    );
    const accessToken = exchangeTokenResponse.data.access_token;
    // tokens.accessToken  = exchangeTokenResponse.data.access_token;
    // console.log("acesToken", accessToken)



    const request1 = {
      access_token: accessToken,
    };
    const response = await client.accountsGet(request1);
    const accounts = response.data.accounts;


    // Create a processor token for a specific account id.
    let request = {
      access_token: exchangeTokenResponse.data.access_token,
      account_id: accounts[0].account_id,
      processor: 'dwolla',
    };
    const processorTokenResponse = await client.processorTokenCreate(
      request,
    );
    const processorToken = processorTokenResponse.data.processor_token;
    return processorToken

    // res.send(`processorToken:${processorToken}`)
  }
  catch (error) {
    console.log(error)
  }
}











module.exports = {
  // createLinkTokenNew,
  publicAcessTokenRequest,
  processorTokenRequest
}