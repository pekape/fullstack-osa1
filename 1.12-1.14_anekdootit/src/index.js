import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  nextRandom = () => this.setState({ selected: Math.floor(Math.random() * 6)})

  vote = (i) => () =>
    this.setState( prevState => {
        const votesNew = [...prevState.votes]
        votesNew[i]++
        return { votes: votesNew }
    })

  render() {
    const selected = this.state.selected
    return (
      <div>
        <p>{this.props.anecdotes[selected]}</p>
        <p>has {this.state.votes[selected]} votes</p>
        <Button handler={this.vote(selected)} text="vote" />
        <Button handler={this.nextRandom} text="next anecdote" />
      </div>
    )
  }
}

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

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
