import * as _ from 'lodash';
import {
        ServiceModel as Service,
        ServiceCategoryModel as ServiceCategory, 
        ProductModel as Product
       } from '../models';


import AppConfig from 'src/config/app';
export function formatService(input){
    return new Service(input);
}

export function formatProduct(input){
  return new Product(input);
}

export function formatServiceCategory(input){
  return new ServiceCategory(input);
}

export function getProductPriceFactor( orderEveryOption ){
  
  let priceList = getProductPriceList();
  let item = priceList[0] 
  
  _.forEach( priceList, (i)=>{
      if( i.key == orderEveryOption ){
          item = i
      }
  })
  return item.factor
}

export function getProductPriceList(){
  item = [
        {
            'key': AppConfig.ORDER_EVERY_LIST.RECUR_MONTH, 
            'factor': 1
        },
        {
            'key': AppConfig.ORDER_EVERY_LIST.RECUR_DAILY, 
            'factor': 30
        },
        {
            'key': AppConfig.ORDER_EVERY_LIST.RECUR_WEEK, 
            'factor': 4
        },
        {
            'key': AppConfig.ORDER_EVERY_LIST.RECUR_BI_MONTH, 
            'factor': 2
        }         
        
      ]

  return item     

}


export function getPageNumberInLink(link){
    
    if(link){
      let arr = link.match(/page=(\d*)/);
      return (arr && arr[1])?arr[1]:null;
    }
    return link;

}

export function formatServices(results){
      let list = [];
      _.forEach(results, (i) => {
        list.push(formatService(i));
      })
      return list;
}

export function formatProducts(results){
  let list = [];
  _.forEach(results, (i) => {
    list.push(formatProduct(i));
  })
  return list;
}

export function formatServiceCategories(results){
  let list = [];
  _.forEach(results, (i) => {
    list.push(formatServiceCategory(i));
  })
  return list;
}

