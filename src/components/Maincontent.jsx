import React from 'react';

export default function Maincontent({ news }) {
    return (
        <div className="row justify-content-around">
            {
                news.articles.map((article, index) => (
                    <div className="card my-2" style={{ width: "18rem" }} key={index}>
                        <img src={article.urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <a href={article.url} className="btn btn-primary" target='\'>Read more</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
