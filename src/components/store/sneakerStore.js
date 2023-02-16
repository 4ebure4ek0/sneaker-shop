import { action, makeObservable, observable } from "mobx";

class SneakerStore{
    sneakersId = [] //id добавленных в корзину кроссовок
    count = 0 //количество кроссовок в корзине
    constructor(){
        makeObservable(this, {
            sneakersId: observable,
            count: observable,
            handleId: action,
            deleteId: action,
        })
        this.handleId = this.handleId.bind(this) //добавление id кроссовок в sneakersId
        this.deleteId = this.deleteId.bind(this) //удаление id кроссовок из sneakersId
    }
    handleId(event){
        this.sneakersId.push(event.target.name) //считывание id
        this.count = this.sneakersId.length //считывание количества кроссовок в корзине
    }
    deleteId(event){
        this.sneakersId.splice(this.sneakersId.indexOf(event.target.name), 1) //удаление id кроссовок из массива
        this.count = this.sneakersId.length //считывание количества кроссовок в корзине
    }
}

const sneakerStore = new SneakerStore()
export default sneakerStore