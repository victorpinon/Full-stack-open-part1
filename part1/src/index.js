import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  /*
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14*/

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    <Header course={course} />
    <Content part1={part1} part2={part2} part3={part3} />
    <Total part1={part1} part2={part2} part3={part3} />
  </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part1 part1={props.part1} />
      <Part2 part2={props.part2} />
      <Part3 part3={props.part3} />
    </>
  )
}

const Part1 = (props) => {
  return(
    <>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
    </>
  )
}

const Part3 = (props) => {
  return (
    <>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  )
}
  
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))