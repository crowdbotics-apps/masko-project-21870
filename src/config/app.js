export default appConfig = {
  // todo add library to handle env variables
  // emailAuthAPIEndPoint: "http://127.0.0.1:8000",
  emailAuthAPIEndPoint: "http://192.168.10.6:8000", // "https://masko-project-21870.botics.co/",   // "http://192.168.10.9:8000",
  APIEndPoint: "http://192.168.10.6:8000",
  defaultTimeout: 5000,
  pubPublishKey: 'pub-c-09038c51-029c-47a7-95f2-b6c7407afb12',
  pubSubscribeKey: 'sub-c-6b1bee04-ba9f-11e9-8753-ce76e7dc5905',
  backgroundColor: ['#556897', '#6E87C6'],
  dateFormat: "DD/MM/YYYY",
  dateFormatDb: "YYYY-MM-DD",
  
  headerStyle: {
    alignItems: 'center',
    backgroundColor: '#556897',
    border: null,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    color: "#FFF",
    fontFamily:"Montserrat",
  },
  headerTitleStyle: {
    textAlign:"center", 
    color: "#FFF",
    fontFamily:"Montserrat",
    flex:1 ,
    border: null,
    textTransform:'uppercase'
  },
  contentType:{
    'json':'application/json'
  },
  NAVIGATOR_ROUTE:{
    "SignIn":"SignIn4",
    "SignUp":"SignUp2",
    "ForgetPassword":"ForgetPassword",
    "UserAccount": "UserAccount",
    "Home": "Home",
    "UserHome": "UserAccount",
    "ServiceDetails": "ServiceDetails",
    "ProductList": "ProductList",
    "ProductDetails": "ProductDetails",
    "ConfirmOrder": "ConfirmOrder",
    "MyCart": "MyCart",
    "RecurringOrders":"RecurringOrder",
    "MyOrders": "MyOrder",
    "OrderDetails": "OrderDetails",
  },
  STATUS_CODES: {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  },
  ITEM_TYPES:{
    SERVICES: 1,
    PRODUCT: 2,

  },
  ORDER_EVERY_LIST:{
    RECUR_DAILY: "Daily",
    RECUR_WEEK: "Week",
    RECUR_BI_MONTH: "Bi-Monthly",
    RECUR_MONTH:  "Month"
  }
};
// Stripe Clause : clever-loyal-bliss-clears
// Your webhook signing secret is whsec_0p1f08b61jKKpLw9uDMEnx3lCJNpmHx
