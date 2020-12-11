import AJAX from './request'
import { HOST } from './config'
export const getBannerList = (data) => AJAX.get(`${HOST}/banner`, data)
export const getDragonBall = (data) =>
	AJAX.get(`${HOST}/homepage/dragon/ball`, data)
