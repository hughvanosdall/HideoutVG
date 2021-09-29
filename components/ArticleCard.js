import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Article({article}) {
    const {title, slug, thumbnail} = article.fields;
    return (
        <Link href={`/articles/${slug}`}>
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
                        {/* <Link href={`/articles/${slug}`}><a>Read More</a></Link> */}
                    </div>
                    
                </div>
                {/* <div className="featured">
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
                    
                </div> */}
                
                <style jsx>
                    {`
                        .article-card {
                            display: flex;
                            border-bottom: 2px solid lightgray;
                            padding: 20px 40px
                        }
                        .article-card:hover {
                            cursor: pointer;
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
                            color: #6C6C6C;
                            text-decoration: none;
                        }
                    `}
                </style>
            </div>
        </Link>
    )
}
