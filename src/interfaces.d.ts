export interface IUser {
  id: number
  name: string
  // status: "online" | "away" | "doNotDisturb"
  friends: string[] // TODO: Тут должны быть пользователи
}

export interface IMessage {
  id: number
  author: string
  text: string
}

export interface IRoom {
  id: number
  name: string
  users: IUser[]
  chat: IMessage[]
}

export interface IServer {
  id: number
  name: string
  rooms: IRoom[]
  users: IUser[]
}
