import { block } from "bem-cn"

import "./styles.scss"

const className = block("divider")

interface DividerProps {
  height?: number
  mx?: number
  my?: number
}

export function Divider({ height = 0, mx = 8, my = 2 }: DividerProps) {
  return (
    <div
      className={className()}
      style={{ height, margin: `${my}px ${mx}px` }}
    />
  )
}
