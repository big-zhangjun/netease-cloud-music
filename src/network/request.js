import axios from 'axios'

// 自定义axios实例
const AJAX = axios.create({})
// 请求拦截器
AJAX.interceptors.request.use(
	(request) => {
		console.log(request, '请求成功')
		return request
	},
	(err) => {
		console.log(err, '请求失败')
		return Promise.reject(err)
	}
)
// 响应拦截器
AJAX.interceptors.response.use(
	(res) => {
		return res.data
	},
	(err) => {
		return Promise.reject(err)
	}
)
export default {
	get(url, params, headers = {}) {
		return AJAX.get(url, {
			params: {
				...params
			},
			headers
		})
	}
}
