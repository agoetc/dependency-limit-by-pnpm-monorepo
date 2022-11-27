import { VO } from './core/VO'

export type UserId = VO<number, 'UserId'>

export const UserId = {
  apply(id: number): UserId {
    return id as UserId
  },
}
