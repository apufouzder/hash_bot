
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
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      {userData ? (
         <>
         
         <ul>
           <li>ID: {userData.id}</li>
           <li>First Name: {userData.first_name}</li>
           <li>Last Name: {userData.last_name || 'N/A'}</li>
           <li>Username: {userData.username || 'N/A'}</li>
           <li>Language Code: {userData.language_code}</li>
           <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
          <div>
            {userData}
          </div>
       </>
      ): (
          <p>Loading...!</p>
    )}
    </main>
  )
}

export default App
