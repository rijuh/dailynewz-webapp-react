import React, { useState, useEffect } from 'react';
const config = require('../config.json');

export default function Maincontent() {
    const [articles, setArticles] = useState([]);

    // Construct the newsUrl
    let newsUrl = `${config.api.api_url}&apikey=${config.api.api_key}`;

    useEffect(() => {
        fetch(newsUrl)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
            })
            .catch((error) => console.error('Error fetching news', error));
    }, [newsUrl]); // Adding newsUrl as a dependency

    return (
        <div className="row justify-content-around">
            {articles.map((article, index) => (
                <div className="card my-2" style={{ width: '18rem' }} key={index}>
                    <img src={article.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a
                            href={article.url}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
