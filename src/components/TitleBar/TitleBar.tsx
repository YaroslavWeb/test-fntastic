import ReactDOM from "react-dom"

import { remote } from "electron"
import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

import "./styles.scss"

const className = block("title-bar")

export const TitleBar = () => {
  const window = remote.getCurrentWindow()

  const closeWindow = () => {
    window.close()
  }

  const maximizeWindow = () => {
    if (!window.isMaximized()) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }

  const minimizeWindow = () => {
    window.minimize()
  }

  return ReactDOM.createPortal(
    <div className={className()}>
      <div className={className("title")}>FNTASTIC</div>
      <div className={className("actions")}>
        <button onClick={minimizeWindow}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button onClick={maximizeWindow}>
          <FontAwesomeIcon icon={faSquare} />
        </button>
        <button onClick={closeWindow}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>,
    document.getElementById("title-bar")
  )
}
