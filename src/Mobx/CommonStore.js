import { observable, computed,decorate,action } from "mobx";

import FetchStore from './FetchStore'

class CommonStore extends FetchStore{
	@observable title = "首页"
	@observable isHome = false

    @computed get getTitle() {
        return this.title;
    }

    @computed get getIsHome() {
    	return this.isHome
    }

    @action setTitle(title) {
        this.title = title;
    }

    @action setIsHome(home){
    	this.isHome = home
    }
}

export default new CommonStore()