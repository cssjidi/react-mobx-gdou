import { observable, computed,decorate,action } from "mobx";


class HeaderStore {
	@observable title = "首页"

    @computed get getTitle() {
        return this.title;
    }

    @action setTitle(title) {
        this.title = title;
    }
}

export default new HeaderStore()