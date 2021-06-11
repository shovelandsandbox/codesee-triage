import { Service } from 'typedi'


import { User } from './model'
import { UserStatus } from './schema'

@Service()
export class UserRepository {
  async findByEmail(email: string): Promise<User> {
    const results = await Promise.resolve({ email })

    return results as User
  }

  async findByStatus(
    status: UserStatus,
  ): Promise<User> {
    const results = await Promise.resolve({ status })

    return results as User
  }
}
