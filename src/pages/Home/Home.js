import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { 
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
 } from './Data'

function Home() {
    return (
        <>
          <InfoSection {...homeObjOne}/>  
          <InfoSection {...homeObjTwo}/>  
          <InfoSection {...homeObjThree}/>  
          <InfoSection {...homeObjFour}/>
          <Pricing />  
          <InfoSection {...homeObjFive}/>  
        </>
    )
}

export default Home
