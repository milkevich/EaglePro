import React from 'react'
import { useParams } from 'react-router-dom'

const TrailerOverview = () => {
    const { trailerId } = useParams()
    console.log(trailerId)
  return (
    <div style={{minHeight: 'calc(100vh - 565px)'}}>
        
    </div>
  )
}

export default TrailerOverview