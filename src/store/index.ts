import { IConfig } from "overmind"
import { createHook } from "overmind-react"
import { state } from "./state"
import * as actions from "./actions"

export const config = {
  state,
  actions,
}

declare module "overmind" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>()
