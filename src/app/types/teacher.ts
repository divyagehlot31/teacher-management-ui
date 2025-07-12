export interface Qualification {
  subject: string
  rate: number
}

export interface Teacher {
  name: string
  role: string
  email: string
  phone: string
  address: string
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  timetable: boolean[][]
}
