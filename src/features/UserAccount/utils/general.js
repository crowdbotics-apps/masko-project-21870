import * as _ from 'lodash';
import { UserModel as User, PetModel } from '../models';

export function formatUser(input){
    return new User(input);
}

export function getPageNumberInLink(link){
    if(link){
      let arr = link.match(/page=(\d*)/);
      return (arr && arr[1])?arr[1]:null;
    }

    return link;

}

export function formatPet(data){
    return new PetModel(data);
}

export function formatPets(results){
      let list = [];
      _.forEach(results, (i) => {
        list.push(formatPet(i));
      })
      return list;
}

export function appendPet( storePets, userPet ){

    let list = []
    list.push(formatPet(userPet));
    
    _.forEach(storePets,(i)=>{
      list.push(i);
     });

     return list;

}
