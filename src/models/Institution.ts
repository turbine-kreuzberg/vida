export class Institution {
  constructor(
    private key: string,
    private name: string,
    private phone: string,
    private information: string,
    private chat: string | null = null
  ) {}

  getKey(): string {
    return this.key;
  }

  setKey(key: string): this {
    this.key = key;
    return this;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  getInformation(): string {
    return this.information;
  }

  setInformation(information: string): this {
    this.information = information;
    return this;
  }

  hasChat(): boolean {
    return !!this.chat;
  }

  getChat(): string {
    if (!this.chat) {
      throw new Error('No chat available on institution.');
    }

    return this.chat;
  }

  setChat(chat: string): this {
    this.chat = chat;
    return this;
  }
}
