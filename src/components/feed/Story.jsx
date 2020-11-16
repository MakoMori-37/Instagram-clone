import React from 'react'
import './Story.css'

function Story({image, name}) {
    return (
        <div  className='stotyfeed' >
            <div className='stim' >
            <img src={image} alt='' />

            </div>
            <div className='stspan' >
            <span>{name}</span>

            </div>
        </div>
    )
}

export default Story
