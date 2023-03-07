import User from './User'

export default class Message {
  constructor(message, sender="Mr.unknown") {
    this.id = Math.round(Math.random() * 1000);
    this.message = message;
    this.date = new Date()
    this.sender = sender
  }
  getMessage() {
    return this.message;
  }
  setMessage(message) {
    this.message = message;
  }
  getId() {
    return this.id
  }
  getDate() {
    return this.date
  }
  getTime() {
    return this.date.getHours() + ":" + this.date.getMinutes()
  }
  getSender() {
    return this.sender;
  }
}
