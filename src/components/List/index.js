import React, { Component } from 'react';
import ListItem from '../ListItem/index';
import { ListWrapper } from './styles';

class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <ListWrapper>
        {data.map(data => (
          <ListItem key={data.id} {...data} />
        ))}
      </ListWrapper>
    );
  }
}

export default List;