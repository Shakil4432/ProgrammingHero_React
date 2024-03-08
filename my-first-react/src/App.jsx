import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo' 
import Actors from './Actors'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const books=[
    {id:1,name:"physics", price:100},
    {id:2,name:"Chemistry", price:140},
    {id:3,name:"Biology", price:200},
    {id:4,name:"Math", price:390},
  ]


  const actors=['Sakib Khan', 'Jayen Khan', 'Bappa raj', "Jashim"];
  const singers=[
    {name:"Shakil", age:26, profession:"student"},
    {name:"Rajib", age:30, profession:"Engineer"},
    {name:"Jashim", age:22, profession:"SR"},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {singers.map(singer => <Singer singer={singer}></Singer>)}
      <Todo task="my name is Shakil.I am a web developer" isDone={true}></Todo>
      {actors.map(actor => <Actors name={actor}></Actors>)}
     
    </>
  )
}

export default App
