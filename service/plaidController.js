const { Configuration, PlaidApi, PlaidEnvironments, ProcessorTokenCreateRequest } = require('plaid');



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










module.exports = {
  // createLinkTokenNew,
}