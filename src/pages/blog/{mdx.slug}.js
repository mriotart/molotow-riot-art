import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div id='blogPostMainSection' className='main-section-container'>
        <div className='main-section-title'>
          {data.mdx.frontmatter.title}
        </div>
        <p className='main-section-subtitle-text'>
          {data.mdx.frontmatter.date}
        </p>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <div className="mdx-container mrt-mt2">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD.MMMM.YYYY", locale: "de")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost