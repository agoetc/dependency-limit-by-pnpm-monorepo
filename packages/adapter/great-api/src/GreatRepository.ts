import { UserId } from 'domain/src/UserId'
import { Great } from 'domain/src/Great'

/**
 * 本当はhttp clientでapiを叩く
 */
export const GreatRepository = {
  find(id: UserId): Great {
    return Great.apply({
      userId: id,
      value: 'great',
    })
  },
}
