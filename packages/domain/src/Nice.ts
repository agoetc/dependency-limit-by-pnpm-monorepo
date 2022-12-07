import { UserId } from './UserId'
import type { O } from './core/O'

type Props = {
  userId: UserId
  value: string
}

export type Nice = O<'Nice'> & Props

export const Nice = {
  apply(props: Props): Nice {
    return props as Nice
  },
}
