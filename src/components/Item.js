import React from 'react'
import { useDispatch} from 'react-redux'
import moment from 'moment'
import { tasks } from '../reducer/tasks'


export const Item = ({ item }) => {
    const dispatch = useDispatch()
    
    const handleRemoveItem = () => {
        dispatch(tasks.actions.removeOne(item.id))
    }
    const handleCheckbox = () => {
        dispatch(tasks.actions.toggleDone(item.id))
    }

    return (
        <div>
            <input
            type='checkbox'
            name='checkbox'
            value='check'
            onChange={handleCheckbox}>
            </input>
            <p style={{ textDecoration: item.complete ? 'line-through' : '' }}>{item.text}</p>
            <p>{moment(item.created).fromNow()}</p>        
            <button onClick= {handleRemoveItem}>Remove</button>
        </div>
    )
}