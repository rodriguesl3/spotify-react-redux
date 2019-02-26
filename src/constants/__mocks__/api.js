import {
  userInfo,
} from '../../components/main/UserInfo/__mocks__/objectsMocks';


export const get = url => {
  if (url) {
    return Promise.resolve(userInfo);
  } else {
    return Promise.reject({
      'status': '401'
    })
  }
}