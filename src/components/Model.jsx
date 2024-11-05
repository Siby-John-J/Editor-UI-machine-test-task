import React, { useContext, useState } from 'react'
import { dataContext } from '../context/dataContext'

function Model() {
    const { setIsModel, setElem, elem } = useContext(dataContext)
    const [newItem, setNewItem] = useState({
        title: '',
        url: ''
    })
    
    const addToList = (e) => {
        const { title, url } = newItem

        if(title && url) {
            if(elem.length >= 15) {
                alert('maximum limit reached')
            } else {
                setElem(prev => {
                    return [...prev, { ...newItem, id: prev.length + 1 }]
                })

                const data = [...elem, { ...newItem, id: elem.length + 1 }]
                
                sessionStorage.setItem('data', JSON.stringify(data))
            }

            setIsModel(prev => false)
        } else {
            alert("please enter some input")
        }
    }

    const addToNewItem = (e, type) => {
        setNewItem(prev => {
            prev[type] = e.target.value
            return prev
        })
    }

    return (
        <div 
            className='bg-white flex flex-col justify-center items-center border-black border-[5px] w-[18em] h-fit py-[1em] rounded-md absolute left-[44vw] top-[10vh]'>
            <div className='mx-6'>
                <label className='text-[14px]' htmlFor="">Menu Name</label>
                <input onChange={e => addToNewItem(e, 'title')} className='border-[2px] border-black rounded-md px-2' type="text" />
            </div>
            <div className='mx-6 mb-3'>
                <label className='text-[14px]' htmlFor="">Destination URL</label>
                <input onChange={e => addToNewItem(e, 'url')} className='border-[2px] border-black rounded-md px-2' type="text" />
            </div>
            <div className='my-2 w-[100%] flex justify-evenly px-8'>
                <button
                    onClick={addToList} 
                    className='w-[5em] hover:bg-green-500 hover:text-white border-[3px] rounded-md border-green-500 h-[2em]'>Ok</button>
                <button
                    onClick={e => setIsModel(prev => false)} 
                    className='w-[5em] hover:bg-red-500 hover:text-white border-[3px] rounded-md border-red-500 h-[2em]'>Cancel</button>
            </div>
        </div>
  )
}

export default Model