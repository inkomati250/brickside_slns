import React from 'react';
import './article.css';

const Article = () => {
    return (
        <div className="gpt3__blog-container_article">  {/* Added quotation marks */}
            <div className="gpt3__blog-container_article-image">
                {/* You can add an image or any content here */}
            </div>
            <div className="gpt3__blog-container_article-content">
                <h2>Article Title</h2>
                <p>This is a brief description of the article.</p>
            </div>
        </div>  {/* Correctly closed the div */}
    );
}

export default Article;

// This component is a placeholder for the article section of the application.
