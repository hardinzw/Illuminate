import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';
const timeago = require('react-timeago');
const LINK_REL = 'nofollow noreferrer noopener';

  const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
//   const site = getSiteHostName(url) || 'news.ycombinator.com';
//   const link = getArticleLink({ url, id });
//   const commentUrl = `${HN_ITEM}${id}`;
//   const userUrl = `${HN_USER}${by}`;

  return (
    <Item>
      <ExternalLink href="" rel={LINK_REL} target="_blank">
        <Title>
          <Host></Host>
        </Title>
      </ExternalLink>
      <Description>
        <CommentLink href="" rel={LINK_REL} target="_blank"></CommentLink>
          {/* {timeago.format(new Date(time * 1000).toISOString())} */}
      </Description>
    </Item>
  );
};

export default ListItem;