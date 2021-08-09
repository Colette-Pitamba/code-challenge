import React, { useEffect, useState } from 'react';

// apis
import { getArticlesRequested } from '../../apis/articles';

// components
import SearchForm from '../shared/search-form';
import ArticleItem from '../feature/article';

/**
 * Returns a list of articles.
 */

const ArticlesContainer = () => {
  /**
   * Local state storage
   * 
   * https://reactjs.org/docs/hooks-state.html
   */
  const [articlesListData, setArticlesListData] = useState([]);
  const [articlesQueryData, setArticlesQueryData] = useState([]);
  const [isQueryActive, setIsQueryActive] = useState(false);

  /**
   * A lifecycle hook that only runs once
   * when the component mounts.
   * 
   * Gets a list of articles
   * 
   * https://reactjs.org/docs/hooks-effect.html
   */
  useEffect(() => {
    getArticlesRequested().then((data) => {

      setArticlesListData(data.results);
    }).catch((error) => {
      // temp console log but ideally we would want
      // an error UI of some sort
      console.log(false);
    });
  }, []);

  const handleSearchInputChange = ((event) => {
    let searchData = articlesListData.filter((article) => {
      return article.title.toLowerCase().includes(event.target.value.toLowerCase()) || 
        article.byline.toLowerCase().includes(event.target.value.toLowerCase()) ||
        article.section.toLowerCase().includes(event.target.value.toLowerCase());
    });

    if (searchData.length) {
      setArticlesQueryData(searchData);
      setIsQueryActive(false);
    } else {
      setArticlesQueryData([]);
      setIsQueryActive(true);
    }
  });

  let articles = !articlesQueryData.length ? articlesListData : articlesQueryData;

  // Maps articles and returns an article list item
  const content = articles.map((article, index) => {
    return ( 
      <ArticleItem
        key={`${index} - ${article.created_date}`}
        title={article.title}
        byline={article.byline}
        section={article.section}
        abstract={article.abstract}
      />
    )
  });

  return (
    <div className="mt-5">
      <SearchForm
        handleInputChange={handleSearchInputChange}
        name="articles-search"
        placeholder="Search articles"
      />
    
    { articles && !isQueryActive &&
      <ul className="mt-5 list-group list-group-flush">
        {content}
      </ul>
    }

    { !articlesQueryData.length && isQueryActive &&
      <p className="mt-5 list-group list-group-flush">
        We couldn't find what you were looking for.
      </p>
    }
    </div>
  );
};

  export default ArticlesContainer;
