import { UserRepository } from '../../adapter/nice-api/src/UserRepository'
import { User } from '../../domain/src/User'
import { UserId } from '../../domain/src/UserId'

export type ShowUserUsecaseRequest = {
  userId: UserId
}

export type ShowUserUsecaseResponce = {
  user: User
}

export const ShowUserUsecase = {
  execute(req: ShowUserUsecaseRequest): ShowUserUsecaseResponce {
    return {
      user: UserRepository.find(req.userId),
    }
  },
}
