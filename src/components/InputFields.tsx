import { ChangeEvent } from 'react'
import * as Constants from '../constants/Constants'
import { ParticipantType, ParticipantTypeKey } from '../types/types'
import TableCell from './TableCell'

interface InputFieldsProps {
  participant: ParticipantType;
  handleChange: (event: ChangeEvent<HTMLInputElement>, fieldName: ParticipantTypeKey) => void;
}

const InputFields = ({ participant, handleChange }: InputFieldsProps) => (
  <>
    <InputField name="name" placeholder={Constants.FULL_NAME} {...{ participant, handleChange }} />
    <InputField name="email" placeholder={Constants.EMAIL} {...{ participant, handleChange }} />
    <InputField name="phone" placeholder={Constants.PHONE} {...{ participant, handleChange }} />
  </>
)

interface InputFieldProps extends InputFieldsProps {
  name: ParticipantTypeKey;
  placeholder: string;
}

const InputField = ({
  name, placeholder, participant, handleChange
}: InputFieldProps) => (
  <TableCell>
    <input {...{ name, placeholder }} type="text" value={participant[name]} onChange={(e) => handleChange(e, name)} />
  </TableCell>
)

export default InputFields
