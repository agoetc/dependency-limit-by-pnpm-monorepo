import { User } from 'domain/src/User'
import { UserId } from 'domain/src/UserId'
import { ShowUserUsecase } from 'usecase/src/ShowUserUsecase'

const App = () => {
  const { user } = ShowUserUsecase.execute({ userId: UserId.apply(1) })

  return <div className="App">{User.fullName(user)}</div>
}

export default App
