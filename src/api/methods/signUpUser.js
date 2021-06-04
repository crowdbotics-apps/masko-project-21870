import Api from 'src/api';
import ApiConstants from '../ApiConstants';
import * as _ from 'lodash';

export default function signUpUser(user) {
  let products = ''
  if ( user.signupProducts && user.signupProducts.length>0 ){
      _.forEach(user.signupProducts,(k)=>{
          if(products==''){
            products = k.id
          }else{
            products += ','+k.id
          }

      })
  }

  return Api(
    ApiConstants.ACTIONS.SIGNUP,
    {
      name: user.name,
      email: user.email,
      username: user.email,
      password: user.password,
      products: products,
      signup_frequent_purchase: user.frequentPurchases
    },
    'post',
    null,
  );
}
