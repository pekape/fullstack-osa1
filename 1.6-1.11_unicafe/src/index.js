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
    let arvosteluja = this.state.hyvat + this.state.neutraalit + this.state.huonot
    if (arvosteluja === 0) return 0

    let summa = 0
    summa += this.state.hyvat
    summa -= this.state.huonot

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

        <Button handler={this.hyvaArvostelu} teksti="hyvä" />
        <Button handler={this.neutraaliArvostelu} teksti="neutraali" />
        <Button handler={this.huonoArvostelu} teksti="huono" />

        <h2>statistiikka</h2>

        hyvä {this.state.hyvat}<br />
        neutraali {this.state.neutraalit}<br />
        huono {this.state.huonot}

        <Statistics keskiarvo={this.keskiarvo} positiivisia={this.positiivisia} />
      </div>
    )
  }
}

const Button = ({handler, teksti}) => (
  <button onClick={handler}>{teksti}</button>
)

const Statistic = ({teksti, funktio, yksikko}) => (
  <p>{teksti} {funktio()} {yksikko}</p>
)

const Statistics = ({keskiarvo, positiivisia}) => {
  return (
    <div>
      <Statistic teksti="keskiarvo" funktio={keskiarvo} />
      <Statistic teksti="positiivisia" funktio={positiivisia} yksikko="%" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
