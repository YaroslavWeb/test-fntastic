import { block } from "bem-cn"

import { Divider } from "../../utility/Divider"
import { Button } from "../../Button"
import { IUser, IRoom } from "../../../interfaces.d"

import "./styles.scss"

const className = block("server-info-modal")

interface ServerInfoModalProps {
  users: IUser[]
  rooms: IRoom[]
}

export function ServerInfoModal({ users, rooms }: ServerInfoModalProps) {
  return (
    <div className={className()}>
      <Divider height={2} my={20} />
      <div>
        <div>Users</div>
        <Divider />
        <div className={className("user-list")}>
          {users.map((user) => (
            <div
              key={user.id}
              className={className("user")}
              data-tip={user.name}
            >
              <img
                className={className("avatar")}
                src={`https://avatars.dicebear.com/api/human/${
                  user.id + user.name
                }.svg`}
              />
            </div>
          ))}
        </div>
      </div>
      <Divider my={16} />
      <div>
        <div>Rooms</div>
        <Divider />
        <div className={className("room-list")}>
          {rooms.map((room) => (
            <div key={room.id} className={className("room")}>
              {room.name}
            </div>
          ))}
        </div>
      </div>
      <Divider height={2} my={20} />
      <Button label="JOIN" fullWidth />
    </div>
  )
}
