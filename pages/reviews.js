import React from 'react'
import {createClient} from 'contentful';
import ArticleCard from '../components/ArticleCard';

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
  
    // const res = await client.getEntries({content_type: 'article'});
    const res = await client.getEntries({'metadata.tags.sys.id[all]': 'review'})

    
    return {
      props: {
        reviews: res.items,
      },
      revalidate: 1
    }
  }

export default function Reviews({reviews}) {
    return (
        <div className="review-list">
            {reviews.map(review => (
                <ArticleCard key={review.sys.id} article={review}/>
            ))}

            <style jsx>{`
                .review-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px 60px;
                }
            `}</style>
        </div>
    )
}
