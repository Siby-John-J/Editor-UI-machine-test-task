import React, { useState, useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../context/dataContext'

function Page() {
    const { id } = useParams()
    
    const [pageName, setPageName] = useState('')
    const { elem } = useContext(dataContext)
    
    useEffect(() => {
        elem.forEach(value => {
            if(value.url === ('/' + id)) {
                console.log(value.title);
                
                setPageName(prev => value.title)
            }
        })
        
    }, [])
    
    return (
        <div className='w-[90%] h-[30vh] mt-[2em]'>
            <h1 className='font-bold text-center text-[2.5em]'>{pageName}</h1>
        </div>
    )
}

export default Page