import React from 'react'

const List = (props) => (
  <li id={props.id}>
    <span>{props.text}</span>
    <button onClick={()=>props.onClick(props.text)}>change</button>
    <div>{props.name}</div>
  </li>
)

export default List
