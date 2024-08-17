import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Righsidebar/Rightsidebar'
import Qustiondetails from './Questiondetails'
const Displayquestion = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Qustiondetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Displayquestion