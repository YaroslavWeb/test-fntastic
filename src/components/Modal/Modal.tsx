import React, { ReactNode } from "react"
import ReactDOM from "react-dom"
import ReactTooltip from "react-tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { block } from "bem-cn"

import "./styles.scss"

const className = block("modal")

interface ModalProps {
  title: string
  content: ReactNode
  isOpen: boolean
  handleClose: () => void
}

export const Modal = ({ title, content, isOpen, handleClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div className={className()}>
          <div className={className("overlay")} onClick={handleClose} />
          <div className={className("window")}>
            <div className={className("title")}>{title}</div>
            <div className={className("content")}>{content}</div>
            <span className={className("close")} onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <ReactTooltip
            place="right"
            textColor="#dddddd"
            backgroundColor="#30475e"
          />
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  )
}
