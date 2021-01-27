import { useState } from "react"
import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"

import { useOvermind } from "../../../../store"
import { IServer } from "../../../../interfaces.d"

import "./styles.scss"

const className = block("server-list-item")

interface ListItemProps {
  server: IServer
  index: number
}

export function ListItem({ server, index }: ListItemProps) {
  const { actions } = useOvermind()
  const [isActive, setActive] = useState(false)

  const handleClick = () => {
    actions.openModal({
      title: server.name,
      props: { rooms: server.rooms, users: server.users },
    })
  }
  return (
    <li
      className={className({ active: index === 0 })}
      data-tip={server.name}
      onClick={handleClick}
    >
      <div className={className("overlay")}>
        <FontAwesomeIcon icon={faInfo} />
      </div>
      <img
        src={`https://avatars.dicebear.com/api/gridy/${
          server.id + server.name
        }.svg`}
      />
    </li>
  )
}
