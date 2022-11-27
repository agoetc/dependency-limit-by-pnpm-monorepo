import { UserId } from './UserId'
import type { O } from './core/O'

type Props = {
  userId: UserId
  firstName: string
  lastName: string
}

export type User = O<'User'> & Props

export const User = {
  apply(props: Props): User {
    return props as User
  },
  fullName(user: User): string {
    return `${user.firstName} ${user.lastName}`
  },
}
