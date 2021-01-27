import { IRoom, IMessage, IUser, IServer } from "../interfaces.d"

const friends = ["Max", "Mad", "Vladimer", "John Wick", "Stalin", "Zerg"]
const names = [
  "Slava",
  "Boby",
  "Alex",
  "Tom",
  "Sasha",
  "Gordon Freeman",
  "Jhon Wick",
  "Kratos",
  "Hades",
  "Tanos",
  "Nikta",
  "Poseydon",
  "Ninja",
  "Light",
  "Reaper",
  "Zagara",
  "Valeriy",
  "Shazam",
  "Homelander",
]

const random = () => Math.floor(Math.random() * 1000)

const messages: IMessage[] = [
  {
    id: random(),
    author: "Yaroslav",
    text: "Hello!",
  },
  {
    id: random(),
    author: "Electro",
    text: "Hey",
  },
]

const getUsers = (count: number): IUser[] => {
  const users = []

  for (let index = 0; index < count; index++) {
    const user = {
      id: random(),
      name: names[Math.floor(Math.random() * names.length)],
      friends,
    }
    users.push(user)
  }
  return users
}

const rooms: IRoom[] = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "Junior's",
    users: getUsers(2),
    chat: messages,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Middle's",
    users: getUsers(5),
    chat: messages,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Senior's",
    users: getUsers(7),
    chat: messages,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Break",
    users: getUsers(1),
    chat: messages,
  },
]

export const servers: IServer[] = [
  {
    id: random(),
    name: "Front-end",
    rooms,
    users: getUsers(25),
  },
  {
    id: random(),
    name: "Game Dev",
    rooms,
    users: getUsers(12),
  },
  {
    id: random(),
    name: "Back-end",
    rooms,
    users: getUsers(16),
  },
]

export const profile: IUser = {
  id: random(),
  name: "Yaroslav",
  friends,
}
