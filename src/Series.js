import React, {Component} from 'react';
import api from './Api'


const statuses = {
  'watched':'Assistido',
  'watching':'Assistindo',
  'toWatch':'Assistir',
}


class Series extends Component {
 constructor(props) {
    super(props)

    this.state = {
      series: [],
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({isLoading: true});
     // passar o genero que vc quer carregar {this.props.match.params.genre
     api.loadSeriesByGenre(this.props.match.params.genre).then((res) => {
        this.setState({
          isLoading: false,
          series: res.data
        })
      })
    
  }

  renderSeries(series){
    return (
                <div className="item  col-xs-4 col-lg-4">
                    <div className="thumbnail">
                      <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                      <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                          {series.name}</h4>
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <p className="lead">
                              {series.genre} / {statuses[series.status]}</p>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <a className="btn btn-success" href="">Gerenciar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
  }
  render(){
    return (

          <div>
              <section className="intro-section">
                  <h1>Nova Série {this.props.match.params.genre}</h1>
              </section>

              <div id="series" className="row list-group">

                {/* se o carregamento for true aparece a mensagem abaixo */
                    this.state.isLoading && <span>Aguarde, carregando ...</span>
                }

                { !this.state.isLoading &&
                
                  this.state.series.map(this.renderSeries)
                
                }

                </div>

              </div>


    )
  }
}

export default Series