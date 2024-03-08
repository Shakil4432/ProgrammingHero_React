import React from 'react'

export default function Singer({singer}) {
  return (
    <div>
        <h2>Singer : {singer.name}</h2>
        <h2>Singer : {singer.age}</h2>
        <h2>Singer : {singer.profession}</h2>
    </div>
  )
}
