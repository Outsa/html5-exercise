import { useContext } from "react"
import ParticipantContext from "../contexts/ParticipantContext"

const useParticipants = () => {
    const context = useContext(ParticipantContext)
    if (context === undefined) {
      throw new Error('useParticipants must be used within a ParticipantProvider')
    }
    return context
  }

export default useParticipants