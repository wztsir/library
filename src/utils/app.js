import request from '@/utils/request'
//import qs from 'qs'
// import axios from 'axios'

const targetIp='https://101.35.181.143:12345/api'
const URL = {
    login: '/v1.1/user/login',
    getActivity:'/v1.1/activity',
    getTeam:'/v1.1/team',
    postActivity:'/v1.1/activity/release',
}


// export function login(data) {
//     return request({
//         url: targetIp+URL.login,
//         // url: URL.login,
//         crossDomain: true,
//         method: 'post',
//         headers: {'content-type': 'application/x-www-form-urlencoded'},
//         data: qs.stringify(data),
//     })
// }

export function getActivity(params) {
    return request({
        url: targetIp+URL.getActivity,
        // url: URL.getActivity,
        crossDomain: true,
        method: 'get',
        params
    })
}
export function getTeam(params) {
    return request({
        // url: URL.getTeam,
        url: targetIp+URL.getTeam,
        crossDomain: true,
        method: 'get',
        params
    })
}

// export function postActivity(data) {
//     // "http://loacalhost:9876"
//     return request({
//         url: targetIp+URL.postActivity,
//         // url: URL.postActivity,
//         crossDomain: true,
//         withCredentials : true,
//         method: 'post',
//         headers: {'content-type': 'application/x-www-form-urlencoded'},
//         // headers: {'content-type': 'application/json;charset=utf-8'},
//         // cookie:{'username':'"2|1:0|10:1665975509|23:username-localhost-8888|44:ODk5N2Y5ODdjMjFkNGJmNDlhZWY2MmJjNzJlYWM0ZTc=|9ea3c6553b87e0b8246609f3ad02e5a83035c4a6c1c4f38820d5a67c9271dec0"'},
//         data: qs.stringify(data),
//
//     })
// }

