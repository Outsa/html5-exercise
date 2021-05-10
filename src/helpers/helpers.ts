import { FormEvent } from 'react'
import { INITIAL_PARTICIPANT_NAMES } from '../constants/Constants'
import { ParticipantType } from '../types/types'

const getRandomInt = (min : number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export const createInitialParticipants = () => Array.from(
  INITIAL_PARTICIPANT_NAMES, (name, index) => (
    { id: index + 1,
      name: name,
      phone: '050' + getRandomInt(1000000, 9000000),
      email: name.toLowerCase().replace(' ', '.') + '@somefakemail.com' }
  ))

export const validate = (participant: ParticipantType) => {
  const errors: Record<string, string> = {}
  const {name, email, phone} = participant
  if (!name) {
    errors.name = 'Name is required'
  }
  if (!phone) {
    errors.phone = 'Phone is required'
  }
  else if (!/^[0-9\b]+$/.test(phone)) {
    errors.phone = 'Phone is invalid'
  }
  if (!email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid'
  }
  return errors
}

export const handleValidation = (event: FormEvent<HTMLFormElement>, participant: ParticipantType) => {
  event.preventDefault()
  const errors = validate(participant)
  if (Object.entries(errors).length === 0) {
    return true 
  }
  alert(Object.values(errors).join('\n'))
  return false
}