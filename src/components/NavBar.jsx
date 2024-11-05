import React, { useContext, useState } from 'react'
import Element from './Element'
import "./NavBar.css"
import { closestCorners, DndContext } from '@dnd-kit/core'
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { dataContext } from '../context/dataContext'

function NavBar() {
  return (
    <div className='border-black border-[5px] mt-5 rounded-md w-[90vw] h-[4em]'>
        <Elements />
    </div>
  )
}

function Elements() {
    const { elem, setElem, setIsModel } = useContext(dataContext)
    const getTaskPos = id => elem.findIndex(elem => elem.id === id)

    const handleDragEnd = (event) => {
        const { active, over } = event
        
        if(active.id === over.id) return
        
        setElem((prev) => {
            const orgPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id)

            return arrayMove(prev, orgPos, newPos)
        })
    }
    
    return (
        <div className='flex flex-row items-center justify-between h-[100%]'>
            <DndContext 
                onDragEnd={handleDragEnd}
                collisionDetection={closestCorners} >
                <div className='flex flex-row'>
                    <SortableContext items={elem} strategy={horizontalListSortingStrategy} >
                        {
                            elem.map(item => {
                                return <Element data={item} />
                            })
                        }
                    </SortableContext>
                </div>
            </DndContext>
            <button 
                onClick={e => setIsModel(prev => true)} 
                className='add_btn mx-4 font-bold border-[5px] border-black px-3'>Add +</button>
        </div>
    )
}



export default NavBar