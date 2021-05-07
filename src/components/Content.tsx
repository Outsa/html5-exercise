import { PARTICIPANT_LIST_HEADER } from '../constants/Constants'
import { ParticipantProvider } from '../contexts/ParticipantContext'
import ParticipantTable from './ParticipantTable'

const Content = () => (
  <div className="content">
    <h1>
      {PARTICIPANT_LIST_HEADER}
    </h1>
    <ParticipantProvider>
      <ParticipantTable />
    </ParticipantProvider>
  </div>
)

export default Content
