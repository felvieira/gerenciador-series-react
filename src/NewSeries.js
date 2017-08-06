import React, {Component} from 'react';

class NewSeries extends Component {

  render() {
    return (
      <section className="intro-section">
        <h1>Nova Série</h1>
        <form>
          <input
            type="text"
            className="form-control"
            name="nome"
            placeholder="Nome da Série"/>
          <textarea
            className="form-control"
            name="comentarios"
            placeholder="Comentários sobre a Série"></textarea>

        </form>

      </section>
    )

  }
}

export default NewSeries
