/* App config for apis
 */

import appConfig from "src/config/app";

const ApiConstants = {
  ACTIONS:{
    BASE_URL: appConfig.APIEndPoint,
    LOGIN: '/api/v1/login/',
    SIGNUP: '/api/v1/signup/',
    UPDATE_PROFILE: '/accounts/user/',
    FORGET_PASSWORD: '/rest-auth/password/reset/',
    CHANGE_PASSWORD: '/accounts/password/change/',
    BREED_TYPE: "/api/v1/breed-type/",
    PET_TYPE:"/api/v1/pet-type/",
    PET: "/api/v1/pet/",
    SERVICE: "/api/v1/service/",
    SERVICE_CATEGORY: "/api/v1/service-category/",
  },
  STATUS_CODES: {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  },
  
};

export default ApiConstants;
