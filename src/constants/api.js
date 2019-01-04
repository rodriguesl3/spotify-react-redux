import Axios from 'axios'

export const get = (url) => {
    return Axios.get(url, {
        headers: {
            "Authorization": `Bearer ${window.sessionStorage.getItem('access_token')}`
        }
    })
}


// export const post = (url, data) => {
//     return Axios.get(url, {
//         headers: {
//             "Authorization": `Bearer ${window.sessionStorage.getItem('access_token')}`
//         }
//     })
// }