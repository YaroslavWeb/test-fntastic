import { ReactNode } from "react"
import { block } from "bem-cn"

import "./styles.scss"

const className = block("button")

enum ButtonVariant {
  primary = "primary",
  success = "success",
  error = "error",
}

interface ButtonProps {
  variant?: ButtonVariant
  label?: string
  icon?: ReactNode
  tip?: string
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function ButtonComponent({
  variant = ButtonVariant.primary,
  label,
  icon,
  tip,
  fullWidth,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button
        data-tip={tip}
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={className({
          primary: variant === ButtonVariant.primary,
          success: variant === ButtonVariant.success,
          error: variant === ButtonVariant.error,
          fullWidth,
        })}
      >
        {label || icon}
      </button>
    </>
  )
}

ButtonComponent.variant = ButtonVariant

export const Button = ButtonComponent
