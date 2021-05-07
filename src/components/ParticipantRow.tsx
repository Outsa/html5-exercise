import { useState } from 'react'
import { ParticipantContextType } from '../contexts/ParticipantContext'
import { UpdateParticipantForm } from './Forms'
import { IconButton } from './Buttons'
import TableCell from './TableCell'
import { ParticipantType } from '../types/types'
import TableRow from './TableRow'
import useParticipants from '../hooks/useParticipants'

export interface ParticipantRowProps {
  participant: ParticipantType;
}

const ParticipantRow = ({ participant }: ParticipantRowProps) => {
  const [editable, setEditable] = useState(false)

  const { deleteParticipant } = useParticipants() as ParticipantContextType

  return (
    editable
      ? ( <UpdateParticipantForm {...{ participant, setEditable }} />)
      : (
        <TableRow onClick={() => setEditable(true)}>
          <TableCell>
            {participant.name}
          </TableCell> 
          <TableCell>
            {participant.email}
          </TableCell>
          <TableCell>
            {participant.phone}
          </TableCell>  
          <TableCell>
            <IconButton onClickFn={() => setEditable(false)} icon="pen" />
            <IconButton onClickFn={() => deleteParticipant(participant.id)} icon="trash" />
          </TableCell> 
        </TableRow>
      )
  )
}

export default ParticipantRow
