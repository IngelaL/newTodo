import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'
import { AddTask } from './AddTask'

export const TaskList = () => {
   const items = useSelector(store => store.tasks.items)
   


return (
    <div>
    {items.map((item) => (
        <Item key={item.id} item={item}></Item> 
    ))}
    <AddTask />
    </div>
 ) 
}
