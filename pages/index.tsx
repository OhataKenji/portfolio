import Container from '../components/container'
import ProductArticles from '../components/product-articles'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Misc from '../components/misc'

type Props = {
  productArticles: Post[]
}

const Index = ({ productArticles }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ken's Portfolio</title>
        </Head>
        <Container>
          <Intro />
          {productArticles.length > 0 && <ProductArticles posts={productArticles} />}
          <Misc></Misc>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const productArticles = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { productArticles },
  }
}
