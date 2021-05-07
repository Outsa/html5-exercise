import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TableCellProps 
extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children?: ReactNode;
  isHeader?: boolean;
}

const TableCell = ({children = null, isHeader = false, ...rest}: TableCellProps) => {
  return (
    <span className={isHeader ? "table-header": "table-cell"} {...rest}>
        {children}
     </span>
  )
}

export default TableCell

export const TableHeader = ({children = null, ...rest}: TableCellProps) => {
    return (
      <TableCell isHeader {...rest}>
        {children}
      </TableCell>
    )
}

