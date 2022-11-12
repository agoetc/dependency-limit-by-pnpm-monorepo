import { UserId } from './UserId'
import type { O } from './core/O'

export type User = O<'User'> & {
  userId: UserId
  firstName: string
  lastName: string
}

export const User = {
  fullName(user: User): string {
    return `${user.firstName} ${user.lastName}`
  },
}
