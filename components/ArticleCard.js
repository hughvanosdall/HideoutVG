import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Article({article}) {
    const {title, slug, thumbnail} = article.fields;
    return (
        <div className="article-card">
            <div className="featured">
                <Image 
                    className="thumbnail"
                    src={`https:${thumbnail.fields.file.url}`}
                    width={400}
                    height={200}
                    
                />
            </div>
            <div className="content">
                <div className="info">
                    {title}
                </div>
                <div className="actions">
                    <Link href={`/articles/${slug}`}><a>Read More</a></Link>
                </div>
                
            </div>
            
            <style jsx>
                {`
                    .article-card {
                        display: flex;
                        border-bottom: 4px dotted blue;
                        padding: 20px 40px
                    }

                    .featured {
                        max-width: 400px;
                    }

                    .content {
                        display: flex;
                        flex-direction: column;
                        align-content: flex-start;
                        justify-content: space-around;
                        align-items: flex-start;

                        padding: 50px;
                    }

                    .actions a {
                        color: #fff;
                        background: #f01b29;
                        
                        text-decoration: none;
                    }
                `}
            </style>
        </div>
    )
}
