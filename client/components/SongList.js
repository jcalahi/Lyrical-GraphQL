import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import fetchSongList from '../queries/fetchSongList';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {

  constructor(props) {
    super(props);
    this.renderSongs = this.renderSongs.bind(this);
    this.onDeleteSong = this.onDeleteSong.bind(this);
  }

  onDeleteSong(id) {
    const { mutate, data: { refetch } } = this.props;

    mutate({ variables: { id } })
      .then(() => refetch());
  }

  renderSongs() {
    const { songs } = this.props.data;
    return songs.map(({ id, title }) => {
      return (
        <li className="collection-item" key={id}>
          <Link to={`/songs/${id}`}>{
            title}
          </Link>
          <i className="material-icons" onClick={() => this.onDeleteSong(id)}>delete</i>
        </li>
      );
    });
  }

  render() {
    const { loading } = this.props.data;

    if (loading) return null;
    
    return (
      <div>
        <h4>Song List</h4>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link 
          className="btn-floating btn red right"
          to="/songs/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(fetchSongList)(SongList));
