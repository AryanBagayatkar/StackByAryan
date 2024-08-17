import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Righsidebar/Rightsidebar'
import Homemainbar from '../../components/Homemainbar/Homemainbar'
import '../../App.css'
const Question = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Question