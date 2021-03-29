import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducer/tasks'


export const ClearAll = () => {
const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => {dispatch(tasks.actions.clearAll())}}>Clear All</button>
        </div>
    )
}