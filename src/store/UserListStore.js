import {makeAutoObservable} from "mobx";

export default class UserListStore {
    constructor() {
        this._userList = [
/*            {id: 1, name: 'LADA_KALINA', userId: 1},
            {id: 2, name: 'MAZDA CX-9', userId: 1},*/
        ]
        this._userStringList = [
            {id: 1, type: 'Benzin', price: 1000, date:'', costsListId: 1},
            {id: 2, type: 'Benzin', price: 2000, date:'', costsListId: 1},
            {id: 3, type: 'Benzin', price: 3000, date:'', costsListId: 2}
        ]
        makeAutoObservable(this)
    }
    setUserList(userList){
        this._userList = userList
    }
    setUserStringList(userStringList){
        this._userStringList = userStringList
    }

    get UserList() {
        return this._userList
    }
    get userStringList() {
        return this._userStringList
    }
}