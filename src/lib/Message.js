export default class Message {
  constructor(content, isMine) {
    this.id = crypto.randomUUID()
    this.content = content
    this.isMine = isMine
  }
}