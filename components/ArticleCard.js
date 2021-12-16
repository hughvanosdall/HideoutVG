import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Article({article}) {
    const {title, slug, thumbnail, excerpt, author} = article.fields;
    let {createdAt} = article.sys
    const date = new Date(createdAt);
    createdAt = date.toString();
    createdAt = createdAt.split(' ').slice(1,4);
    createdAt = `${createdAt[0]} ${createdAt[1]}, ${createdAt[2]}`
    
    console.log(article)

    return (
        <Link href={`/articles/${slug}`}>
            <div className="article-card">
                <div className="featured">
                    <Image 
                        className="thumbnail"
                        src={`https:${thumbnail.fields.file.url}`}
                        width={500}
                        height={250}  
                    />
                </div>
                <div className="content">
                    <div className="info">
                        {title}<br/>
                        <span className="author">{author}</span><br/>
                        <span className="createdAt">{createdAt}</span><br/>
                        <span className="excerpt">{excerpt}</span>
                    </div>
                </div>
                <style jsx>
                    {`
                        .article-card {
                            display: flex;
                            border-bottom: 2px solid lightgray;
                            padding: 20px 40px;
                            height: 500px;
                        }
                        .article-card:hover {
                            cursor: pointer;
                        }
    
                        .featured {
                            max-width: 40%;
                            position: relative;
                        }
    
                        .content {
                            display: flex;
                            flex-direction: column;
                            align-content: flex-start;
                            justify-content: space-around;
                            align-items: flex-start;
    
                            padding: 25px;
                            max-width: 60%
                        }
                        .createdAt {
                            font-size: 14px;
                        }
                        .excerpt {
                            font-size: 14px;
                        }
                        .author {
                            font-size: 14px;
                        }
                    `}
                </style>
            </div>
        </Link>
    )
}

