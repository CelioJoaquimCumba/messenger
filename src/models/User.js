export default class User {
    constructor(name){
        this.id = crypto.randomUUID()
        this.name = name
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
}