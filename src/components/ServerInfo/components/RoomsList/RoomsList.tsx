import ReactTooltip from "react-tooltip"
import { block } from "bem-cn"

import { IRoom } from "../../../../interfaces.d"

import "./styles.scss"

const className = block("rooms-list")

interface RoomsListProps {
  rooms: IRoom[]
}

export function RoomsList({ rooms }: RoomsListProps) {
  return (
    <div className={className()}>
      {rooms.map((room) => (
        <div key={room.id + room.name} className={className("room")}>
          <div className={className("users")}>
            {room.users.map((user) => (
              <div
                key={user.id}
                className={className("avatar")}
                data-tip={user.name}
              >
                <img
                  src={`https://avatars.dicebear.com/api/human/${
                    user.id + user.name
                  }.svg`}
                />
              </div>
            ))}
          </div>
          <div className={className("label")}>{room.name}</div>
          <ReactTooltip />
        </div>
      ))}
    </div>
  )
}
