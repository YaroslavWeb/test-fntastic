import { useState } from "react"
import { block } from "bem-cn"

import { useOvermind } from "../../../store"
import { Divider } from "../../utility/Divider"
import { Button } from "../../Button"

import "./styles.scss"

const className = block("profile-modal")

interface ProfileModalProps {
  handleClose: () => void
}

export function ProfileModal({ handleClose }: ProfileModalProps) {
  const { state, actions } = useOvermind()

  const [name, setName] = useState(state.profile.name)

  const handleClick = () => {
    if (name.trim()) {
      actions.changeProfile(name)
      handleClose()
    }
  }

  return (
    <div className={className()}>
      <Divider height={2} my={20} />
      <div>
        <img
          className={className("avatar")}
          src={`https://avatars.dicebear.com/api/human/${
            state.profile.id + state.profile.name
          }.svg`}
        />
        <Divider my={12} />
        <div>
          <div>Name</div>
          <Divider />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <Divider height={2} my={20} />
      <Button onClick={handleClick} label="SAVE" fullWidth />
    </div>
  )
}
