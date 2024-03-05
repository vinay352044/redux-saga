import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getUsersFetch, removeUsers,updateUsers } from '../actions';
import { useDispatch,useSelector } from 'react-redux'
const Detailed = () => {
    const {id} =useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.myFirstReducer.users)
    const userToUpdate = users.find(user => user.id === id) || {name:'',username:''}
    
    const[user,setUser] = useState({
        name: userToUpdate.name,
        username: userToUpdate.username
    })
    const handleUpdate = () => {
        // console.log(user)
        const updatedUsers = users.map(person => person.id===id ? {...person,...user}:person)
        dispatch(updateUsers(updatedUsers))
        navigate('/')
    }
    const handleChange = (e) => {
        setUser((prevUser)=> ({
            ...prevUser,[e.target.name] : e.target.value
        }))
    }
  return (
    <div>
      <h1>This is detailed page</h1>
      <input
    type='text'
    placeholder='name'
    name='name'
    onChange={handleChange}
    value={user.name}
    />
    <input
    type='text'
    placeholder='username'
    name='username'
    onChange={handleChange}
    value={user.username}
    />
    {console.log(users)}
   
    <br/>
    <br/>
    <input
    type='submit'
    onClick={handleUpdate}
    placeholder='Submit'
    />
    </div>
  )
}

export default Detailed
