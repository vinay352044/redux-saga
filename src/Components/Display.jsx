import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch, removeUsers } from '../actions';
import {useNavigate} from 'react-router-dom'

const Display = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.myFirstReducer.users);

    useEffect(() => {
        dispatch(getUsersFetch());
    }, []);
    const navigate = useNavigate()
    const handleRemove = (id) => {
        const newUsers = users.filter((user)=>{
            return user.id !== id
        })
        dispatch(removeUsers(newUsers))
    }
    const handleUpdate = (id) => {
        navigate(`/detailed/${id}`)
    }

    const renderList = users.map((user) => {
        const { id, name, username, email } = user;
        return (
            <div className='four wide column' key={id}>
                <div className='ui card'>
                    <div className='content'>
                        <div className='header'>{name}</div>
                        <div className='meta'>Username: {username}</div>
                        <div className='description'>Email: {email}</div>
                        <button onClick={()=>handleRemove(id)} className='ui active button'>Remove</button>
                        <button onClick={()=>handleUpdate(id)} className='ui active button'>Update</button>
                    </div>
                </div>
            </div>
        );
    });
    

    return (
        <div className="App">
            <div className='ui link cards'>
                <div className='ui grid'>
                    {renderList}
                </div>
            </div>
        </div>
    );
};

export default Display;
