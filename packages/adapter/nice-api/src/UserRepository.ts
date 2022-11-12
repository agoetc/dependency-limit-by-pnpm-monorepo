import { UserId } from "../../../domain/src/UserId";
import { User } from "../../../domain/src/User";

/**
 * 本当はhttp clientでapiを叩く
 */
export const UserRepository = {
  find(id: UserId): User {
    return {
     type: 'User',
     userId: id,
     firstName: 'un',
     lastName: 'ko'
    }
  },
};
