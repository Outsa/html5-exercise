import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react'
import { ParticipantTypeKey, SortType } from '../types/types'
import { TableHeader } from './TableCell'

interface ColumnTitleProps {
  title: string;
  fieldName: ParticipantTypeKey;
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
}

const ColumnTitle = ({ title, fieldName, sortType, setSortType }: ColumnTitleProps) => {

  const [desc, setDesc] = useState(false)

  const sort = () => {
    const newDir = !desc
    setSortType({ desc: newDir, key: fieldName })
    setDesc(newDir)
  }

  return (
    <TableHeader onClick={() => sort()}>
      {title}
      {sortType.key === fieldName && <FontAwesomeIcon icon={desc ? "arrow-up" : "arrow-down"} />}
  </TableHeader>
  )
}

export default ColumnTitle
