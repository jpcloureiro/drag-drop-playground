import React from 'react'
import { DroppableProps as Props } from './Droppable.types'

const Droppable: React.FC<Props> = ({
  id,
}) => {
  return <div>{id}</div>
}

export default Droppable
