import * as React from "react"
import * as ReactDOM from "react-dom"

import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { config } from "./store"

import { Layout } from "./Layout"

const overmind = createOvermind(config)

function render() {
  ReactDOM.render(
    <Provider value={overmind}>
      <Layout />
    </Provider>,
    document.getElementById("root")
  )
}

render()
