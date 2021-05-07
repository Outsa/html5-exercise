import { useState, ChangeEvent } from "react"
import { EMPTY_PARTICIPANT } from "../constants/Constants"
import { ParticipantType, ParticipantTypeKey } from "../types/types"

const useEditableParticipant = (participant?: ParticipantType) => {
    const [editableParticipant, setEditableParticipant] = useState(participant || EMPTY_PARTICIPANT)

    const handleParticipantFieldChange = (
      event: ChangeEvent<HTMLInputElement>,
      fieldName: ParticipantTypeKey
      ) => {
      setEditableParticipant({ ...editableParticipant, [fieldName]: event.target.value })
    }

    const initEditableParticipant = () =>
    {
      setEditableParticipant(EMPTY_PARTICIPANT)
    }

    return {editableParticipant, handleParticipantFieldChange, initEditableParticipant }
}

export default useEditableParticipant
