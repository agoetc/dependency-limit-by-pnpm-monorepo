import { GreatRepository } from '../../adapter/great-api/src/GreatRepository'
import { NiceRepository } from '../../adapter/nice-api/src/NiceRepository'
import { Great } from '../../domain/src/Great'
import { Nice } from '../../domain/src/Nice'
import { UserId } from '../../domain/src/UserId'

export type ShowUserUsecaseRequest = {
  userId: UserId
}

export type ShowUserUsecaseResponce = {
  great: Great
  nice: Nice
}

export const ShowUserUsecase = {
  execute(req: ShowUserUsecaseRequest): ShowUserUsecaseResponce {
    return {
      great: GreatRepository.find(req.userId),
      nice: NiceRepository.find(req.userId),
    }
  },
}
