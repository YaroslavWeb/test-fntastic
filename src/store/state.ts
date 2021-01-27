import { IUser, IServer } from "./../interfaces.d"
import { profile, servers } from "./exampleData"

type rootState = {
  profile: IUser

  options: {
    sound: number
    microphone: number
  }

  modal: {
    isOpen: boolean
    title: string
    props: any
  }

  curServer: IServer
  servers: IServer[]
}

export const state: rootState = {
  profile,

  options: {
    sound: 100,
    microphone: 100,
  },

  modal: {
    isOpen: false,
    title: null,
    props: null,
  },

  curServer: servers[0],

  servers,
}
