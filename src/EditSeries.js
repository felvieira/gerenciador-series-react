import React, {Component} from 'react';
import api from './Api';
import { Redirect } from 'react-router-dom';

const statuses = {
  'watched':'Assistido',
  'watching':'Assistindo',
  'toWatch':'Assistir',
}
class EditSeries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false,
      redirect: false,
      series:{}
    }

    // corrigindo o retorno null da ação do botao referenciando o this ao botao
    this.saveSeries = this.saveSeries.bind(this);
  }

  componentDidMount() {

    this.setState({isLoading: true});

    api.loadSeriesById(this.props.match.params.id)
        .then((res) => {
          this.setState({ series: res.data })
          this.refs.name.value = this.state.series.name
          this.refs.genre.value = this.state.series.genre
          this.refs.comments.value = this.state.series.comments
          this.refs.status.value = this.state.series.status
        })

    api.loadGenres().then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }

  saveSeries(){
    // console.log(this.refs.name.value);

    // criando um objeto para conter todas as infos das series usando o "refs" para pegar os valores
    const newSeries = {
      id: this.props.match.params.id,
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value,
    }

    // passando a serie pro db
    api.updateSeries(newSeries)
      .then((res)=>{
        // console.log((res));
        // console.log(newSeries);
        this.setState({
          redirect: '/series/'+this.refs.genre.value
        })
      })
  }

  render() {
   
    return (
      <section className="intro-section">
         {this.state.redirect &&
            <Redirect to={this.state.redirect} />
          }
        <h1>Editar Série</h1>
        {/* <p>{JSON.stringify(this.state)}</p> */}
        <form>
          <input type="text" ref="name"  className="form-control" name="nome" placeholder="Nome da Série"/>
            <select  ref="status">
              {Object
                  .keys(statuses)
                  .map( key => <option key={key} value={key}>{statuses[key]}</option>)
              }
            </select>
           
             <select ref="genre">
                 /* usar da api e nao de um objeto como feito acima  */
                {this.state.genres
                    .map( key => <option  key={key} value={key}>{key}</option>)
                }
            </select>
          <textarea ref="comments"  className="form-control" name="comentarios" placeholder="Comentários sobre a Série"></textarea>

            <button type="button" class="btn btn-large btn-block btn-default" onClick={this.saveSeries}>Salvar</button>
            
        </form>

      </section>
    )

  }
}

export default EditSeries
