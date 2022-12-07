import React from 'react'
import { User } from 'domain/src/User'
import { UserId } from 'domain/src/UserId'
import { ShowUserUsecase } from 'usecase/src/ShowUserUsecase'

const App = () => {
  const { great, nice } = ShowUserUsecase.execute({ userId: UserId.apply(1) })

  return (
    <div className="App">
      <p>{great.value}</p>
      <p>{nice.value}</p>
    </div>
  )
}

export default App
