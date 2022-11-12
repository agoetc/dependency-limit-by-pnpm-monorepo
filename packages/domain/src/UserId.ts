import { VO } from './core/VO'

export type UserId = VO<'UserId', number> & {
  value: number
}

export const UserId = {
  apply(id: number): UserId {
    return {
      type: 'UserId',
      value: id,
    }
  },
}
