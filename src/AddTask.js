import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from './reducer/tasks'

export const AddTask = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState ('')

    const handleOnSubmit = e => {
        e.preventDefault()
        dispatch(tasks.actions.addOne(inputValue))
        setInputValue('')
    }


    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <textarea
                aria-label='text area'
                type= 'text'
                rows= '2'
                cols= '30'
                placeholder= 'What to do next?'
                onChange={e => setInputValue(e.target.value)}
                value={inputValue} required

            />
            <button>Add task</button>
        </form>
        </>
    )
}