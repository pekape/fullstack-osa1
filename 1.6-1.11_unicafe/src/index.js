import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0
    }
  }

  hyvaArvostelu = () => {
    this.setState((prevState) => ({
      hyvat: prevState.hyvat + 1
    }))
  }

  neutraaliArvostelu = () => {
    this.setState((prevState) => ({
      neutraalit: prevState.neutraalit + 1
    }))
  }

  huonoArvostelu = () => {
    this.setState((prevState) => ({
      huonot: prevState.huonot + 1
    }))
  }

  keskiarvo = () => {
    let summa = 0
    summa += this.state.hyvat
    summa -= this.state.huonot
    let arvosteluja = this.state.hyvat + this.state.neutraalit + this.state.huonot
    if (arvosteluja === 0) return 0
    let keskiarvo = summa / arvosteluja
    return keskiarvo.toFixed(1)
  }

  positiivisia = () => {
    let arvosteluja = this.state.hyvat + this.state.neutraalit + this.state.huonot
    if (arvosteluja === 0) return 0
    let positiivisia = 100 * this.state.hyvat / arvosteluja
    return positiivisia.toFixed(1)
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
          hyvä {this.state.hyvat}<br />
          neutraali {this.state.neutraalit}<br />
          huono {this.state.huonot}<br />
          keskiarvo {this.keskiarvo()}<br />
          positiivisia {this.positiivisia()} %
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
