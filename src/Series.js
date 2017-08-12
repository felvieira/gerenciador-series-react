import React, {Component} from 'react';
import api from './Api';
import { Link } from 'react-router-dom'


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
    //para o metodo excluir passar o id do this de cada bloco
    this.renderSeries = this.renderSeries.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount(){
  //chamar a api que popula as series
   this.loadData();
  }

  //carregar o componente com as series
  loadData(){
     this.setState({isLoading: true});
     // passar o genero que vc quer carregar {this.props.match.params.genre
     api.loadSeriesByGenre(this.props.match.params.genre).then((res) => {
        this.setState({
          isLoading: false,
          series: res.data
        })
      })
  }

  deleteSeries(id){
    // console.log('excluir',id);
    api.deleteSeries(id).then((res)=> this.loadData())
  }

  renderSeries(series){
    return (
                <div key={series.id} className="item  col-xs-4 col-lg-4">
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
                            <Link className="btn btn-success" to={'/series-edit/'+series.id}>Editar</Link>
                            <a className="btn btn-warning" onClick={ () => this.deleteSeries(series.id) }>Excluir</a>
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

                {/* Se nao estiver carregando e Se nao tiver series para retorno */
                  !this.state.isLoading && this.state.series.length === 0 &&
                  <div className="alert alert-info">Nenhuma série cadastrada.</div>
                }


                {/*Se nao tiver carregando entao renderizar as series*/
                  
                  !this.state.isLoading &&
                
                  this.state.series.map(this.renderSeries)
                
                }

                </div>

              </div>


    )
  }
}

export default Series