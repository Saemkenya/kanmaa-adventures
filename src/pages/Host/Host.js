import React from 'react'
import { InfoSection } from '../../components'
import { hostObjOne, hostObjTwo } from './Data'

function Host() {
    return (
        <>
          <InfoSection {...hostObjOne}/>
          <InfoSection {...hostObjTwo}/>  
        </>
    )
}

export default Host
