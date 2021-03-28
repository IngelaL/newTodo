import React from 'react'
import { useDispatch} from 'react-redux'
import { tasks } from './reducer/tasks'


export const Item = ({ item }) => {
    const dispatch = useDispatch()
    
    const handleRemoveItem = () => {
    dispatch(tasks.actions.removeOne(item.id))
    }

    return (
    <div>
        <p>{item.text}</p>
        <button onClick= {handleRemoveItem}>Remove</button>
    </div>
    )
}