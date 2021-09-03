import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "review" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'review',
    'fields.slug': params.slug
  })

  return {
    props: { review: items[0] }
  }

}

export default function RecipeDetails({ review }) {
  const {featuredImage, title, reviewText} = review.fields;
  console.log(review);
  
  return (
    <div>
      <div className="banner">
        <Image 
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>

      <div className="review-content">
        <div>{documentToReactComponents(reviewText)}</div>
      </div>

      {/* <style jsx>

      </style> */}
    </div>
  )
}