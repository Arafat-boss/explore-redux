import React, { useState } from 'react'

export default function Form() {

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    number: ''
  });

  const userInfoUpdate = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name"
            value={userInfo.name}
            onChange={(e) => userInfoUpdate(e.target.name, e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email"
            value={userInfo.email}
            onChange={(e) => userInfoUpdate(e.target.name, e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="number">Number</label>
          <input 
            type="text" 
            name="number"
            value={userInfo.number}
            onChange={(e) => userInfoUpdate(e.target.name, e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
