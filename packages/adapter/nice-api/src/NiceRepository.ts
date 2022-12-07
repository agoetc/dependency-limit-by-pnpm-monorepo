import { UserId } from 'domain/src/UserId'
import { Nice } from 'domain/src/Nice'

/**
 * 本当はhttp clientでapiを叩く
 */
export const NiceRepository = {
  find(id: UserId): Nice {
    return Nice.apply({
      userId: id,
      value: 'nice',
    })
  },
}
