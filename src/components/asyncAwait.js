import { useEffect, useState } from 'react';
import './App.css';

export default function () {
  const [userData, setUserData] = useState({})

  const handleLoad = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/nishantsinghchandel`);
      const user = await response.json();
      setUserData(user)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoad2 = () => {
    fetch(`https://api.github.com/users/nishantsinghchandel`).then(result => result.json()).then(user => {
      setUserData(user)
    }).catch(error => console.log(error));
  }


  return (
    <div>
      <h1> REACT APP </h1>
      <button className='border border-black px-2 bg-indigo-500 mb-5' onClick={handleLoad2}>LOAD</button>
      {userData.avatar_url && <img className='rounded-full' src={userData.avatar_url} alt="avatar" />
      }
    </div>
  );
}
