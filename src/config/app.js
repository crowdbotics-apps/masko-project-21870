export default appConfig = {
  // todo add library to handle env variables
  // emailAuthAPIEndPoint: "http://127.0.0.1:8000",
  emailAuthAPIEndPoint: "http://192.168.10.17:8000",
  defaultTimeout: 5000,
  pubPublishKey: 'pub-c-09038c51-029c-47a7-95f2-b6c7407afb12',
  pubSubscribeKey: 'sub-c-6b1bee04-ba9f-11e9-8753-ce76e7dc5905',
  backgroundColor: ['#556897', '#6E87C6'],
  headerStyle: {
    backgroundColor: '#556897',
    marginBottom: 20,
    border: null,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    color: "#FFF",
    fontFamily:"Montserrat",
  },
  contentType:{
    'json':'application/json'
  }
};
