import { ParticipantContextType } from '../contexts/ParticipantContext'
import { ParticipantType, SortType } from '../types/types'
import * as Constants from '../constants/Constants'
import ColumnTitle from './ColumnTitle'
import ParticipantRow from './ParticipantRow'
import { TableHeader } from './TableCell'
import TableRow from './TableRow'
import { AddParticipantForm } from './Forms'
import useParticipants from '../hooks/useParticipants'
import { useState, useEffect } from 'react'

const ParticipantTable = () => {
  const { participants, sortParticipants } = useParticipants() as ParticipantContextType

  const [sortType, setSortType] = useState<SortType>({ key: 'name', desc: undefined})

  useEffect(() => {
    if (sortType.desc !== undefined) {
      sortParticipants(sortType)
    }
    // eslint-disable-next-line
  }, [sortType])  

  return (
    <div className="table">
      <AddParticipantForm />
      <TableRow>
        <ColumnTitle title={Constants.NAME} fieldName="name" {...{sortType, setSortType}} />
        <ColumnTitle title={Constants.EMAIL} fieldName="email" {...{sortType, setSortType}} />
        <ColumnTitle title={Constants.PHONE} fieldName="phone" {...{sortType, setSortType}} />
        <TableHeader />
      </TableRow>
      {participants.map((participant: ParticipantType) => (
        <ParticipantRow key={participant.id} {...{ participant }} />)
      )}
    </div>
  )
}

export default ParticipantTable
