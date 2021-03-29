import React from 'react'
import { useSelector } from 'react-redux'

import { tasks } from '../reducer/tasks'

export const Summary = () => {
    const items = useSelector(state => state.tasks.items)
    const itemsComplete = items.filter((item) => item.complete)

    return(
        <div>You have completed {itemsComplete.length} of {items.length} tasks</div>
    )
}