import React from 'react'
import {createClient} from 'contentful';
import ArticleCard from '../components/ArticleCard';

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  
    const res = await client.getEntries({content_type: 'article'});
    //const res = await client.getEntries({'metadata.tags.sys.id[all]': 'review'})
    console.log(res);

    
    return {
      props: {
        articles: res.items,
      },
      revalidate: 1
    }
  }

export default function Home({articles}) {
    
    return (
        <div className="article-list">
            {articles.map(article => (
                <ArticleCard key={article.sys.id} article={article}/>
            ))}
        </div>
    )
}


