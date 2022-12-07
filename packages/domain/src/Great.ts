import { UserId } from './UserId'
import type { O } from './core/O'

type Props = {
  userId: UserId
  value: string
}

export type Great = O<'Great'> & Props

export const Great = {
  apply(props: Props): Great {
    return props as Great
  },
}
