import React from 'react'
import {CardGroup} from 'reactstrap'
import TrenderCard from './TrenderCard'

const Displayer = ({trenders}) => {
  return (
    <CardGroup data-testid="test-2">{trenders.map((elem, i)=>{
        return <TrenderCard key={i} elem={elem}></TrenderCard>
    })}</CardGroup>
  )
}

export default Displayer