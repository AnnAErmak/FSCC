import {makeAutoObservable} from "mobx";

export default class UserListStore {
    constructor() {
        this._userList = []
        this._userStringList = [
            {id: 1, type: 'Benzin', price: 1000, date:'', costsListId: 1},
            {id: 2, type: 'Benzin', price: 2000, date:'', costsListId: 1},
            {id: 3, type: 'Benzin', price: 3000, date:'', costsListId: 2}
        ]
        this._selectedList = {}
        makeAutoObservable(this)
    }
    setUserList(userList){
        this._userList = userList
    }
    setUserStringList(userStringList){
        this._userStringList = userStringList
    }

    setSelectedList(selectedList={id:1}){
        this._selectedList = selectedList
    }

    get UserList() {
        return this._userList
    }
    get userStringList() {
        return this._userStringList
    }

    get SelectedList(){
        return this._selectedList
    }
}