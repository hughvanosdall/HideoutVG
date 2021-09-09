import React from 'react'
import {createClient} from 'contentful';
import ArticleCard from '../components/ArticleCard';

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  
    const res = await client.getEntries({'metadata.tags.sys.id[all]': 'news'});
  
    return {
      props: {
        news: res.items,
      },
      revalidate: 1
    }
  }

export default function News({news}) {
    return (
        <div className="news-list">
            {news.map(article => (
                <ArticleCard key={article.sys.id} article={article}/>
            ))}

            <style jsx>{`
                .news-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px 60px;
                }
            `}</style>
        </div>
    )
}
