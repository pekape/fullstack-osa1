import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0,
      yhteensa: 0
    }
  }

  hyvaArvostelu = () => {
    this.setState((prevState) => ({
      hyvat: prevState.hyvat + 1,
      yhteensa: prevState.yhteensa + 1
    }))
  }

  neutraaliArvostelu = () => {
    this.setState((prevState) => ({
      neutraalit: prevState.neutraalit + 1,
      yhteensa: prevState.yhteensa + 1
    }))
  }

  huonoArvostelu = () => {
    this.setState((prevState) => ({
      huonot: prevState.huonot + 1,
      yhteensa: prevState.yhteensa + 1
    }))
  }

  keskiarvo = () => {
    if (this.state.yhteensa === 0) return 0
    let summa = 0
    summa += this.state.hyvat
    summa -= this.state.huonot
    let keskiarvo = summa / this.state.yhteensa
    return keskiarvo.toFixed(1)
  }

  positiivisia = () => {
    if (this.state.yhteensa === 0) return 0
    let positiivisia = 100 * this.state.hyvat / this.state.yhteensa
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
        <Statistics palautteet={this.state} keskiarvo={this.keskiarvo()}
                    positiivisia={this.positiivisia()} />
      </div>
    )
  }
}

const Button = ({handler, teksti}) => (
  <button onClick={handler}>{teksti}</button>
)

const Statistic = ({teksti, arvo, yksikko}) => (
  <p>{teksti} {arvo} {yksikko}</p>
)

const Statistics = ({palautteet, keskiarvo, positiivisia}) => {
  if (palautteet.yhteensa === 0) {
    return <div>ei yhtään palautetta annettu</div>
  }
  return (
    <div>
      <Statistic teksti="hyvä" arvo={palautteet.hyvat} />
      <Statistic teksti="neutraali" arvo={palautteet.neutraalit} />
      <Statistic teksti="huono" arvo={palautteet.huonot} />
      <Statistic teksti="keskiarvo" arvo={keskiarvo} />
      <Statistic teksti="positiivisia" arvo={positiivisia} yksikko="%" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
