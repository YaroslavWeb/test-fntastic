import { block } from "bem-cn"
import { IUser } from "../../../../interfaces.d"

import "./styles.scss"

const className = block("users-list")

interface UsersListProps {
  users: IUser[]
}

export function UsersList({ users }: UsersListProps) {
  return (
    <div className={className()}>
      {users.map((user) => (
        <div key={user.id} className={className("user")}>
          <div className={className("avatar")}>
            <img
              src={`https://avatars.dicebear.com/api/human/${
                user.id + user.name
              }.svg`}
            />
          </div>
          <div className={className("name")}>{user.name}</div>
        </div>
      ))}
    </div>
  )
}
