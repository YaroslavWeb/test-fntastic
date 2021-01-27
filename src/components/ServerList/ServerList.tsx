import { useState } from "react"
import { block } from "bem-cn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../Button"
import { Modal } from "../Modal"
import { CreateServerModal } from "../ModalContent/CreateServerModal"
import { ServerInfoModal } from "../ModalContent/ServerInfoModal"
import { ListItem } from "./components/ListItem"
import { Divider } from "../utility/Divider"
import { useOvermind } from "../../store"

import "./styles.scss"

const className = block("server-list")

export function ServerList() {
  const { state, actions } = useOvermind()
  const [isModal, setModal] = useState(false)

  const handleOpenModal = () => setModal(true)
  const handleCloseModal = () => setModal(false)

  return (
    <div className={className()}>
      <Divider />
      <Button
        tip="Create server"
        fullWidth
        icon={<FontAwesomeIcon icon={faPlus} />}
        onClick={handleOpenModal}
      />
      <Modal
        title="New server"
        content={<CreateServerModal />}
        isOpen={isModal}
        handleClose={handleCloseModal}
      />
      <Divider height={2} />
      <ul className={className("list")}>
        {state.servers.map((server, idx) => (
          <div key={server.id}>
            <ListItem server={server} index={idx} />
            <Divider my={12} />
          </div>
        ))}
      </ul>
      <Modal
        title={state.modal.title}
        content={<ServerInfoModal {...state.modal.props} />}
        isOpen={state.modal.isOpen}
        handleClose={actions.closeModal}
      />
    </div>
  )
}
