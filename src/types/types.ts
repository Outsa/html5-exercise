export interface ParticipantType {
    id: number;
    name: string;
    phone: string;
    email: string;
  }

export type ParticipantTypeKey = keyof ParticipantType
  
export interface SortType {
    key: ParticipantTypeKey;
    desc: boolean | undefined;
  }

