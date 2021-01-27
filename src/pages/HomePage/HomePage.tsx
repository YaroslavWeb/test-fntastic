import { block } from "bem-cn"
import ReactTooltip from "react-tooltip"

import { IMessage, IServer, IUser, IRoom } from "../../interfaces.d"
import { ServerList } from "../../components/ServerList"
import { ServerInfo } from "../../components/ServerInfo"
import { Chat } from "../../components/Chat"

import "./styles.scss"

const className = block("home-page")

export function HomePage() {
  return (
    <div className={className()}>
      <ServerList />
      <Chat />
      <ServerInfo />
      <ReactTooltip />
    </div>
  )
}
