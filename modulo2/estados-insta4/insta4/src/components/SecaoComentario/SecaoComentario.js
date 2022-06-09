import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	

	// onChangeComentario() {

	// }
	state = {
		comentario:" "
	}
	SecaoComentario = (event) => {
		this.setState({
			comentario: event.target.value
		})
		console.log(this.state.comentario)
	  }

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				onChange={this.SecaoComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
