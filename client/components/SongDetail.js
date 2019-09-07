import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongDetail from '../queries/fetchSongDetail';

import LyricList from './LyricList';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { data: { loading, song }, params: { id } } = this.props;

    if (loading) return null;
    
    return (
      <div>
        <Link to="/">Back</Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={id} />
      </div>
    );
  }
}

export default graphql(fetchSongDetail, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
