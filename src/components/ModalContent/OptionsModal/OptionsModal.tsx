import { useState } from "react"
import { block } from "bem-cn"

import { useOvermind } from "../../../store"
import { Divider } from "../../utility/Divider"
import { Button } from "../../Button"

import "./styles.scss"

const className = block("options-modal")

interface OptionsModalProps {
  handleClose: () => void
}

export function OptionsModal({ handleClose }: OptionsModalProps) {
  const { state, actions } = useOvermind()

  const [soundValue, setSoundValue] = useState<number>(state.options.sound)
  const [microphoneValue, setMicrophoneValue] = useState<number>(
    state.options.microphone
  )

  const handleClick = () => {
    actions.changeVolumeSound(soundValue)
    actions.changeVolumeMicrophone(microphoneValue)
    handleClose()
  }

  return (
    <div className={className()}>
      <Divider height={2} my={20} />
      <div>
        <div>Sound | {soundValue}%</div>
        <Divider />
        <input
          type="range"
          min="0"
          max="100"
          value={soundValue}
          onChange={(e) => setSoundValue(Number(e.target.value))}
        />
      </div>
      <Divider my={12} />
      <div>
        <div>Microphone | {microphoneValue}%</div>
        <Divider />
        <input
          type="range"
          min="0"
          max="100"
          value={microphoneValue}
          onChange={(e) => setMicrophoneValue(Number(e.target.value))}
        />
      </div>
      <Divider height={2} my={20} />
      <Button onClick={handleClick} label="SAVE" fullWidth />
    </div>
  )
}
