import { action, makeObservable, observable } from "mobx";


class LogStore {
    isRegistered = false //переменная определяющая зарегестрирован ли пользователь, менятся самим пользователем
    isLoggedIn = false //переменная определяющая совершен ли вход на сайт
    isAdmin = false //переменная определяющая является ли вошедший пользователь администратором
    username = '' //введенный логин
    password = '' //введенный пароль
    firstname = '' //введенное имя пользователя
    users = [] //массив всех пользователей
    error = '' //ошибка при входе
    constructor(){
        this.changeIsRegistered = this.changeIsRegistered.bind(this) //смены формы регистрации и входа
        this.handleChange = this.handleChange.bind(this) //считывание введенных данных
        this.getUsers = this.getUsers.bind(this) //получение всех пользователей
        this.getUserByUsername = this.getUserByUsername.bind(this) //получение пользователя по логину
        this.addUser = this.addUser.bind(this) //добавление пользователя
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this) //функция регистрации на сайте
        this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this) //функция входа на сайт
        this.handleLogOut = this.handleLogOut.bind(this) //функция выхода с сайта
        makeObservable(this, {
            username: observable,
            password: observable,
            firstname: observable,
            isRegistered: observable,
            handleChange: action,
            isLoggedIn: observable,
            isAdmin: observable,
            error: observable,
            changeIsRegistered: action,
            handleSubmitSignIn: action,
            handleSubmitLogIn: action,
            handleLogOut: action
        })
    }
    changeIsRegistered(){
        this.isRegistered? this.isRegistered = false: this.isRegistered = true //проверка зарегестрирован ли пользователь
    }
    handleChange(event){
        let value = event.target.value
        let name = event.target.name
        if (name == 'username'){
            this.username = value //считывание логина
        } if(name == 'password'){
            this.password = value //считывание пароля
        } else
            this.firstname = value //считывание имени пользователя
    }
    getUsers() {
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/getUsers.py') //запрос на получение всех пользователей из базы данных
        .then((response) => response.text()) //получение ответа на запрос
        .then((users_json) => {
            let users = JSON.parse(users_json) //преобразование ответа в массив
            this.users = users
        })
    }
    getUserByUsername(){
        if(this.users != []){
            let user = this.users.find((u) => u.username == this.username) //проверка наличия пользователя в списке всех пользователей
            return user
        }
    }
    addUser(userCheck){
        if (userCheck !== undefined){
            this.error = 'This username is already taken'
            return null
        }
        if(this.username === '' || this.password === '' || this.firstname === ''){
            this.error = 'Fill in the fields'
            return null
        } else{
        let user = {
            username: this.username,
            password: this.password,
            firstname: this.firstname
        }
        let user_json = JSON.stringify(user) //преобразование всех данных пользователя в строку
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/addUser.py', {method:'post', body: user_json}) //запрос на добавление пользователя в базу данных
        this.isLoggedIn = true //вход на сайт
        }
    }
    handleSubmitSignIn(){
        let userCheck = this.getUserByUsername()
        this.addUser(userCheck)
    }
    handleSubmitLogIn(){
        let userCheck = this.getUserByUsername()
        if(userCheck !== undefined && this.username == userCheck.username && this.password == userCheck.password){
            this.isLoggedIn = true //проверка и вход на сайт
            this.firstname = userCheck.firstname
            if(userCheck.user_type == 'admin'){
                this.isAdmin = true //проверка, является ли пользователь администратором
            }
        } else{
            this.error = "wrong username or password"
        }
    }
    handleLogOut(){
        this.isLoggedIn = false
        this.isAdmin = false
    }
}
const logStore = new LogStore()
export default logStore