import axios from 'axios'
import config from '../config'

class FetchStore{
	fetch({
		type='get',
		url=config+url,
		data, 
		responseType= 'json',
		headers,
		responseEncoding= 'utf8'
	}){
		return axios({
			method:type,
			url,
			data, 
			responseType,
			headers,
			responseEncoding
		}).then(data => {
			return data;
		})
	}
}
export default FetchStore;