import BaseModel from "../../../models/base.model";

export default class UserModel extends BaseModel {

    id = null;
    name=""
    email = "";
    firstName = "";
    lastName = "";
    bioDetail = "";
    birthDate = "";
    gender = "";
    profileImage = "";
    followingCount = 0;
    followerCount = 0;
    feedCount = 0;
    followStatus = false;
    
   constructor(input){
        super();
        this.id = input.id;
        this.email = input.email;
        this.firstName = input.first_name;
        this.lastName = input.last_name;
        this.bioDetail = input.bio_detail || null;
        this.birthDate = input.birth_date || null;
        this.gender = input.gender || null;
        this.profileImage = input.profile_image;
        this.followerCount = input.followers_count || 0;
        this.followingCount = input.following_count || 0;
        this.feedCount = input.feed_count || 0;
        this.followStatus = input.is_follow || false;
   }

   getFullName(){
       return this.firstName+' '+this.lastName;
   }

   toObject(){
       return {
           id: this.id,
           email: this.email,
           name: this.getFullName(),
           birthDate: this.birthDate || null,
           gender: this.gender,
           profileImage: this.profileImage || null,
       }
   }

}