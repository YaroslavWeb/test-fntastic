import { useState } from "react"
import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-regular-svg-icons"

import { Button } from "../Button"
import { useOvermind } from "../../store"

import "./styles.scss"

const className = block("chat")

export function Chat() {
  const [message, setMessage] = useState<string>("")
  const { state } = useOvermind()

  const handleClick = () => {
    setMessage("")
  }

  return (
    <div className={className()}>
      <div className={className("message-list")}>
        {state.curServer.rooms[0].chat.map((message) => (
          <div className={className("message")} key={message.id}>
            <span>{message.author}:</span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className={className("form")}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <Button label="SEND" onClick={handleClick} />
        <Button
          tip="Send file"
          icon={<FontAwesomeIcon icon={faFile} />}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
