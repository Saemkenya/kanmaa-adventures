import React from 'react'
import { InfoSection } from '../../components'
import { hostObjOne, hostObjTwo, hostObjThree } from './Data'

function Host() {
    return (
        <>
          <InfoSection {...hostObjOne}/>
          <InfoSection {...hostObjTwo}/>
          <InfoSection {...hostObjThree}/>
        </>
    )
}

export default Host
