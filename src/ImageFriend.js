import React, { Fragment } from 'react'
import Highlighter from 'react-highlight-words'
import ImageLoader from 'react-load-image'
import styled from 'styled-components'

const Image = styled.img`
  height: 350px;
  display: block;
  margin: 0 auto;
`

function Preloader (props) {
  return <h3>Loading...</h3>
}

export default class ImageFriend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.f,
      input: props.input
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.input !== this.props.input) {
      this.setState({
        input: this.props.input
      })
    }
  }

  render () {
    return (
      <article>
        <ImageLoader src={`friendimg/${this.state.name}.jpg`}>
          <Image />
          <div>Error!</div>
          <Preloader />
        </ImageLoader>
        <h2><Highlighter
          highlightClassName="hl"
          searchWords={this.state.input.split(' ')}
          autoEscape={true}
          textToHighlight={this.state.name}
        /></h2>
      </article>
    )
  }
}