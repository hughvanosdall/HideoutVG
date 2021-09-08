import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Skeleton from '../../components/Skeleton'

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
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'review',
    'fields.slug': params.slug
  })

  if(!items.length) {
    return{
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { review: items[0] },
    revalidate: 1
  }

}

export default function ReviewDetails({ review }) {
  if(!review) {
    return (
      <Skeleton />
    )
  }
  const {featuredImage, title, reviewText} = review.fields;

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