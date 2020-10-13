import React from 'react'
import { InfoSection } from '../../components'
import { experienceObjOne, experienceObjTwo } from './Data'

function Experiences() {
    return (
        <>
          <InfoSection {...experienceObjTwo}/>  
          <InfoSection {...experienceObjOne}/>  
        </>
    )
}

export default Experiences
