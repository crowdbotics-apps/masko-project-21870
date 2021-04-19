import * as _ from 'lodash';
import { ServiceModel as Service, ServiceCategoryModel as ServiceCategory } from '../models';

export function formatService(input){
    return new Service(input);
}

export function formatServiceCategory(input){
  return new ServiceCategory(input);
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

export function formatServiceCategories(results){
  let list = [];
  _.forEach(results, (i) => {
    list.push(formatServiceCategory(i));
  })
  return list;
}

