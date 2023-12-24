import { useState } from 'react'
import './App.css'
import AuthPage from './AuthPage'
import ChatPage from './ChatPage'


function App() {
  const [user, setUser] = useState(undefined)
  console.log(user)

  return (
    <>
      {user ? <ChatPage user={user} /> : <AuthPage onAuth={(user) => setUser(user)} />}
    </>
  )

}

export default App
