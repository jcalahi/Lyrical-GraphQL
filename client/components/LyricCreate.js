import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../queries/addLyricToSong';

class LyricCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="addLyric">Add a Lyric</label>
        <input name="addLyric" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
