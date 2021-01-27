import { Action } from "overmind"
import { state } from "./state"

interface IModal {
  title: string
  props: any
}

export const openModal: Action<IModal> = ({ state }, { title, props }) => {
  state.modal.isOpen = true
  state.modal.title = title
  state.modal.props = props
}

export const closeModal: Action = ({ state }) => {
  state.modal.isOpen = false
  state.modal.title = null
  state.modal.props = null
}

export const changeProfile: Action<string> = ({ state }, value) => {
  state.profile.name = value
}

export const changeVolumeSound: Action<number> = ({ state }, value) => {
  state.options.sound = value
}

export const changeVolumeMicrophone: Action<number> = ({ state }, value) => {
  state.options.microphone = value
}
