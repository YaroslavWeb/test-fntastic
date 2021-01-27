import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSlidersH,
  faMicrophone,
  faMicrophoneSlash,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-regular-svg-icons"

import { useState } from "react"
import { Button } from "../Button"
import { Divider } from "../utility/Divider"
import { Modal } from "../Modal"
import { UsersList } from "./components/UsersList"
import { RoomsList } from "./components/RoomsList"
import { OptionsModal } from "../ModalContent/OptionsModal"
import { ProfileModal } from "../ModalContent/ProfileModal"
import { useOvermind } from "../../store"

import "./styles.scss"

const className = block("server-info")

export function ServerInfo() {
  const { state, actions } = useOvermind()

  const [isModalOptions, setModalOptions] = useState(false)
  const [isModalProfile, setModalProfile] = useState(false)

  // display users list or rooms list
  const [isUsers, setUsers] = useState(true)
  const showUsers = () => setUsers(true)
  const hideUsers = () => setUsers(false)

  const handleOpenOptions = () => setModalOptions(true)
  const handleCloseOptions = () => setModalOptions(false)

  const handleOpenProfile = () => setModalProfile(true)
  const handleCloseProfile = () => setModalProfile(false)

  const toggleMicrophone = () => {
    if (state.options.microphone > 0) {
      actions.changeVolumeMicrophone(0)
    } else {
      actions.changeVolumeMicrophone(100)
    }
  }

  const toggleSound = () => {
    if (state.options.sound > 0) {
      actions.changeVolumeSound(0)
    } else {
      actions.changeVolumeSound(100)
    }
  }

  return (
    <div className={className()}>
      <div className={className("info")}>
        <div className={className("title")}>Front-end</div>
        <Divider height={2} my={10} />
        <div className={className("switcher")}>
          <Button
            variant={isUsers ? Button.variant.success : Button.variant.primary}
            onClick={showUsers}
            label="USERS"
          />
          <Button
            variant={!isUsers ? Button.variant.success : Button.variant.primary}
            onClick={hideUsers}
            label="ROOMS"
          />
        </div>
        <Divider height={2} my={10} />

        {isUsers ? (
          <UsersList users={state.curServer.users} />
        ) : (
          <RoomsList rooms={state.curServer.rooms} />
        )}
      </div>

      <div className={className("profile")}>
        <Divider my={10} />
        <div
          className={className("avatar")}
          data-tip="Edit profile"
          onClick={handleOpenProfile}
        >
          <div className={className("overlay")}>
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <Divider />

          <img
            src={`https://avatars.dicebear.com/api/human/${
              state.profile.id + state.profile.name
            }.svg`}
          />
        </div>
        <Divider />

        <Modal
          title="Profile"
          content={<ProfileModal handleClose={handleCloseProfile} />}
          isOpen={isModalProfile}
          handleClose={handleCloseProfile}
        />
        <div className={className("name")}>
          #{state.profile.id} {state.profile.name}
        </div>
        <div className={className("actions")}>
          <Button
            onClick={toggleMicrophone}
            variant={
              state.options.microphone
                ? Button.variant.success
                : Button.variant.error
            }
            icon={
              <FontAwesomeIcon
                icon={
                  state.options.microphone ? faMicrophone : faMicrophoneSlash
                }
              />
            }
          />
          <Button
            onClick={toggleSound}
            variant={
              state.options.sound
                ? Button.variant.success
                : Button.variant.error
            }
            icon={
              <FontAwesomeIcon
                icon={state.options.sound ? faVolumeUp : faVolumeMute}
              />
            }
          />
          <Button
            onClick={handleOpenOptions}
            icon={<FontAwesomeIcon icon={faSlidersH} />}
          />
          <Modal
            title="Options"
            content={<OptionsModal handleClose={handleCloseOptions} />}
            isOpen={isModalOptions}
            handleClose={handleCloseOptions}
          />
        </div>
      </div>
    </div>
  )
}
