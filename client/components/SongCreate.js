import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSongList from '../queries/fetchSongList';

class SongCreate extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '' };
    // functions
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query: fetchSongList }]
    }).then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h4>Create a New Song</h4>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Song Title:</label>
          <input 
            name="title" 
            value={this.state.title} 
            onChange={(e) => this.setState({ title: e.target.value })} 
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
