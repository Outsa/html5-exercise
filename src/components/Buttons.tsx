import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IconButtonProps {
    onClickFn: () => void;
    icon: IconProp;
}

export const IconButton = ({ onClickFn, icon }: IconButtonProps) => (
  <button type="button" className="icon-button" onClick={() => onClickFn()}>
    <FontAwesomeIcon icon={icon} />
  </button>
)

interface TextButtonProps
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className: string;
  buttonText: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export const TextButton = ({
  className, buttonText, type = 'button', onClick,
}: TextButtonProps) => (
  <button className={`text-button ${className}`} type={type || 'button'} {...{ onClick }}>
    {buttonText}
  </button>
)

export const SubmitButton = ({ ...props }: TextButtonProps) => (
  <TextButton {...props} type="submit" />
)
