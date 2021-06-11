import { UserStatus } from './schema'

export class User {
  id!: string
  createdAt?: number
  updatedAt?: number
  name!: string
  email!: string
  bio?: string
  preferences?: string
  status?: UserStatus
}
