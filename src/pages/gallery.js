import * as React from 'react'
import Layout from './components/layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Gallery from '@browniebroke/gatsby-image-gallery'

const GalleryPage = ({ data }) => {
  const mdxNodeData = data.allMdx.nodes[0];
  const galleryImages = mdxNodeData.frontmatter.gallery_images.map((imageData) => {
    return imageData.image_path.childImageSharp
  });
  return (
    <Layout pageTitle="Gallerie">
      <div id='galleryMainSection' className='main-section-container'>
        <div className='main-section-title'>
          Gal<span>lerie</span>
        </div>

        <div className="mdx-container">
          <MDXRenderer>
            {data.allMdx.nodes[0].body}
          </MDXRenderer>
        </div>

        <div className='gallery-container mrt-mt2'>
          <Gallery images={galleryImages} />
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
        filter: {fileAbsolutePath: {regex: "/molotow-riot-art/gallery/index.mdx/i" }}
      ) {
        nodes {
          body
          frontmatter {
            gallery_images {
              name
              image_path {
                childImageSharp {
                    thumb: gatsbyImageData(
                        width: 270
                        height: 270
                        placeholder: BLURRED
                    )
                    full: gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
`

export default GalleryPage