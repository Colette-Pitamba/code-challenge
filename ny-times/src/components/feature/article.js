import React from 'react';

/**
 * Returns a single Article Item
 */
const ArticleItem = (props) => {
  const {
    title,
    byline,
    section,
    abstract
  } = props;

  return (
    <li className="list-group-item border-end-0 border-start-0">
      <div>
        <p className="fs-1 pt-2">{title}</p>
        <p>{abstract}</p>
        <p>
          <span className="text-secondary">{byline}</span> | {''}
          <span className="text-info">{section}</span>
        </p>
      </div>
    </li>
  );
  };
  
  export default ArticleItem;
  