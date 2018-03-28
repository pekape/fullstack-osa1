import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  hyvaArvostelu = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1
    }))
  }

  neutraaliArvostelu = () => {
    this.setState((prevState) => ({
      neutraali: prevState.neutraali + 1
    }))
  }

  huonoArvostelu = () => {
    this.setState((prevState) => ({
      huono: prevState.huono + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>

        <button onClick={this.hyvaArvostelu}>hyvä</button>
        <button onClick={this.neutraaliArvostelu}>neutraali</button>
        <button onClick={this.huonoArvostelu}>huono</button>

        <h2>statistiikka</h2>

        <div>
          hyvä {this.state.hyva}<br />
          neutraali {this.state.neutraali}<br />
          huono {this.state.huono}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
