import React, {Component} from 'react';
import api from './Api'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }
  }

  componentDidMount() {
    // com o axios direto axios.get('http://localhost:3001/genres')
    // .then((res)=>console.log(res)) iniciar o loading
    this.setState({isLoading: true})
    // usando um js como intermediario
    api
      .loadGenres()
      .then((res) => {
        this.setState({
          // qdo retornar a resposta
          isLoading: false,
          genres: res.data
        })
      })
  }

  // criar links dos generos com um metodo
  renderGenderLink(genre) {
    return (
      <span>&nbsp;<a href=''>{genre}</a>
      </span>
    )
  }

  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png"/></h1>
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          {// se o carregamento for true aparece a mensagem abaixo
          this.state.isLoading && <span>Aguarde, carregando ...</span>
}
          {!this.state.isLoading && <div>
            Ver séries do gênero: {this
              .state
              .genres
              .map(this.renderGenderLink)}
          </div>
}
        </section>
      </div>
    )
  }
}

export default Home
