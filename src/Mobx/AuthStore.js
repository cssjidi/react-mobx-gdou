import { observable, computed,decorate,action } from "mobx";

import FetchStore from './FetchStore'

class AuthStore extends FetchStore{
    constructor(){
        super();
    }
	@observable token = '';
	@observable isLogin = false

    @computed get getToken() {
    	return this.token
    }

    @action setToken(title) {
        super.fetch({
            type:'post',
            url:'/api/login',
            data:{
                mobile:'15902032601',
                password:'123456'
            }
        }).then(data =>{
            console.log(data)
        })
    }
}

export default new AuthStore()