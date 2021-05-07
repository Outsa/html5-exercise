import { FormEvent, ReactNode } from 'react'
import { BUTTON_TEXT_ADD_NEW, BUTTON_TEXT_CANCEL, BUTTON_TEXT_SAVE } from '../constants/Constants'
import { ParticipantContextType } from '../contexts/ParticipantContext'
import { handleValidation } from '../helpers/helpers'
import useEditableParticipant from '../hooks/useEditableParticipant'
import useParticipants from '../hooks/useParticipants'
import { ParticipantType } from '../types/types'
import { TextButton, SubmitButton } from './Buttons'
import InputFields from './InputFields'
import TableCell from './TableCell'

interface SubmitFormProps {
  onSubmitFn: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
}

const SubmitForm = ({ onSubmitFn, children, className }: SubmitFormProps) => (
  <form onSubmit={onSubmitFn} className={"table-row" + (className ? (" " + className) : "")}>
    {children}
  </form>
)

export default SubmitForm

export const AddParticipantForm = () => {
  const { addParticipant } = useParticipants() as ParticipantContextType

  const { editableParticipant: newParticipant, 
          initEditableParticipant,
          handleParticipantFieldChange 
        } = useEditableParticipant()

  const handleCreateParticipant = (event: FormEvent<HTMLFormElement>) => {
    const validationPassed = handleValidation(event, { ...newParticipant })
    if (validationPassed) {
      addParticipant(newParticipant)
      initEditableParticipant()
    }
  }

  return (
     <SubmitForm onSubmitFn={handleCreateParticipant} className="add-participant-form">
        <InputFields {...{ participant: newParticipant, handleChange: handleParticipantFieldChange }} />
        <TableCell>
          <SubmitButton className="text-button add-button" buttonText={BUTTON_TEXT_ADD_NEW} />
        </TableCell>
      </SubmitForm>
  )
}

interface UpdateParticipantFormProps {
  participant: ParticipantType;
  setEditable: (editable: boolean) => void;
}

export const UpdateParticipantForm = ({ participant, setEditable }: UpdateParticipantFormProps) => {
  const { updateParticipant } = useParticipants() as ParticipantContextType

  const { editableParticipant,
          handleParticipantFieldChange 
        } = useEditableParticipant(participant)

  const handleUpdateParticipant = (event: FormEvent<HTMLFormElement>) => {
    const validationPassed = handleValidation(event, editableParticipant)
    if (validationPassed) {
      updateParticipant(editableParticipant)
      setEditable(false)
    }
  }

  return (
    <SubmitForm onSubmitFn={handleUpdateParticipant}>
        <InputFields
          participant={editableParticipant}
          handleChange={handleParticipantFieldChange}
        />
        <TableCell>
          <TextButton className="cancel-button" onClick={() => setEditable(false)} buttonText={BUTTON_TEXT_CANCEL} /> 
          <SubmitButton className="save-button" buttonText={BUTTON_TEXT_SAVE} />
        </TableCell>
    </SubmitForm>
  )
}
