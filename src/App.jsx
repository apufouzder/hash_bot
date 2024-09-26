
import { useEffect, useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk';

function App() {

  const [userData, setUserData] = useState(null);

  console.log(userData);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, [])

  return (
    <main>
    
    </main>
  )
}

export default App
