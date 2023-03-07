import Message from "./Message";

export default class Conversation {
  constructor(user1, user2) {
    //this.id = crypto.randomUUID();
    this.id = Math.round(Math.random() * 1000).toString();
    this.user1 = user1;
    this.user2 = user2;
    this.messages = [];
  }
  getId() {
    return this.id;
  }
  getUser1() {
    return this.user1;
  }
  getUser2() {
    return this.user2;
  }
  getMessages() {
    return this.messages;
  }
  addMessage(message, user1_sent) {
    if(user1_sent){
      this.messages.push( new Message(message, this.user1))
      return
    }
    this.messages.push(new Message(message, this.user2));
  }
  getLastMessage() {
    const length = this.messages.length
    if(length !== 0) return this.messages[length - 1]
  }
}