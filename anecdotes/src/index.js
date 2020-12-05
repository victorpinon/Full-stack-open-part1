import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleRandom = () => {
    const randomIndex = getRandomInt(anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    let newPoints = [...points]
    newPoints[selected]++ 
    setPoints(newPoints)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>{points[selected]}</p>
      <Button text="vote" handleClick={handleVote}/>
      <Button text="next anecdote" handleClick={handleRandom}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)