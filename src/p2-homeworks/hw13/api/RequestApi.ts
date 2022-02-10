import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
})

export const RequestApi = {
   auth(success: boolean) {
      return instance.post('test', {success: success})
         .then(res => res.data)
   },
}