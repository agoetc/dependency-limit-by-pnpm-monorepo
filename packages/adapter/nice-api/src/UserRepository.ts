import { UserId } from 'domain/src/UserId'
import { User } from 'domain/src/User'

/**
 * 本当はhttp clientでapiを叩く
 */
export const UserRepository = {
  find(id: UserId): User {
    return User.apply({
      userId: id,
      firstName: 'un',
      lastName: 'ko',
    })
  },
}
