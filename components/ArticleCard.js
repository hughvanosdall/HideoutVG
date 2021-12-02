import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function Article({article}) {
    const {title, slug, thumbnail, articleText} = article.fields;
    let {createdAt} = article.sys
    const date = new Date(createdAt);
    createdAt = date.toString();
    createdAt = createdAt.split(' ').slice(1,4);
    createdAt = `${createdAt[0]} ${createdAt[1]}, ${createdAt[2]}`
    
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
                        {title}<br/>
                        <span className="createdAt">{createdAt}</span>
                        {/* <article>{documentToReactComponents(articleText.substring(0,20))}</article> */}
                    </div>
                </div>
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
                            max-width: 40%;
                        }
    
                        .content {
                            display: flex;
                            flex-direction: column;
                            align-content: flex-start;
                            justify-content: space-around;
                            align-items: flex-start;
    
                            padding: 50px;
                        }
                        .createdAt {
                            font-size: 14px;
                        }
                    `}
                </style>
            </div>
        </Link>
    )
}
