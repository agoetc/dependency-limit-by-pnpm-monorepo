export type User = {
  firstName: string
  lastName: string
}

export const User = {
  fullName(user: User): string {
    return `${user.firstName} ${user.lastName}`
  }
}