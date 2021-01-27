import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { useOvermind } from "../../store"

import "./styles.scss"

const className = block("selector-friends")

export function SelectorFriends() {
  const { state } = useOvermind()

  return (
    <div className={className()}>
      {state.profile.friends.map((friend: string, idx: number) => (
        <div
          key={friend + idx}
          className={className("friend")}
          data-tip={friend}
        >
          <div className={className("overlay")}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <img src={`https://avatars.dicebear.com/api/human/${friend}.svg`} />
        </div>
      ))}
    </div>
  )
}
