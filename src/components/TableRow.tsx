import { ReactNode } from 'react'

export interface TableRowProps 
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const TableRow = ({children, ...rest}: TableRowProps) => {
  return (
    <div className="table-row" {...rest}>
        {children}
     </div>
  )
}

export default TableRow
