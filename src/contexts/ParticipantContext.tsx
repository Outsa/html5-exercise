import { ReactNode, useState } from "react"
import { createContext } from "react"
import { INITIAL_PARTICIPANT_SIZE } from "../constants/Constants"
import { createInitialParticipants } from "../helpers/helpers"
import { ParticipantType, SortType } from "../types/types"

export interface ParticipantContextType
{
    participants: ParticipantType[];
    addParticipant: (participant: ParticipantType) => void;
    updateParticipant: (participant: ParticipantType) => void;
    deleteParticipant: (id: number) => void
    sortParticipants: (sortType: SortType) => void;
}

const ParticipantContext = createContext<Partial<ParticipantContextType>>({})

export default ParticipantContext

interface ParticipantProviderProps {
    children: ReactNode;
}

export const ParticipantProvider = ({children}: ParticipantProviderProps) => {
    const [participants, setParticipants] = useState<ParticipantType[]>(createInitialParticipants())

    const [lastId, setLastId] = useState(INITIAL_PARTICIPANT_SIZE)

    const sortParticipants = (sortType: SortType) => {
        const { key, desc } = sortType
        const sorted = [...participants].sort((a, b) => {
          if (desc)
            return b[key] > a[key] ?  1 : -1
          else
            return b[key] > a[key] ?  -1 : 1
        }
        ) 
        setParticipants(sorted)
      }

    const addParticipant = (participant: ParticipantType) => { 
        const newId = lastId + 1     
        setParticipants([...participants, {...participant, id: newId}])
        setLastId(newId)
      }

    const updateParticipant = (updatedParticipant: ParticipantType)=>{
        const updatedId = updatedParticipant.id
        const editedIndex = participants.findIndex((participant) => participant.id === updatedId)
        const participantsBefore = participants.slice(0, editedIndex)
        const participantsAfter = participants.slice(editedIndex + 1, participants.length)
        setParticipants([...participantsBefore, {...updatedParticipant}, ...participantsAfter])
      }

    const deleteParticipant =  (id: number) => {
        setParticipants(participants.filter(
          (participant) => participant.id !== id)
        )
      }
    
    return (
    <ParticipantContext.Provider value={
      {participants, addParticipant, updateParticipant, deleteParticipant, sortParticipants}
      }>
        {children}
    </ParticipantContext.Provider>)
}
