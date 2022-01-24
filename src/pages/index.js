import * as React from 'react'
import Layout from './components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Lightbox from 'react-image-lightbox';
import BlogEntries from './components/blog-entries';

const IndexPage = ({ data }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const mdxNodeData = data.allMdx.nodes[0];
  const allSpotlightImages = mdxNodeData.frontmatter.spotlight_images;

  const prevIndex = (photoIndex + allSpotlightImages.length - 1) % allSpotlightImages.length
  const nextIndex = (photoIndex + allSpotlightImages.length + 1) % allSpotlightImages.length

  const imageCaption = allSpotlightImages[photoIndex].subtitle;
  const imageTitle = allSpotlightImages[photoIndex].title;

  const mainSrc = allSpotlightImages[photoIndex]?.image_path?.childImageSharp?.full?.images?.fallback?.src
  const nextSrc = allSpotlightImages[nextIndex]?.image_path?.childImageSharp?.full?.images?.fallback?.src
  const prevSrc = allSpotlightImages[prevIndex]?.image_path?.childImageSharp?.full?.images?.fallback?.src

  const onCloseLightbox = () => {
    setIsOpen(false)
  }

  const openLightbox = (imageIndex) => {
    setPhotoIndex(imageIndex);
    setIsOpen(true);
  }

  return (
    <Layout pageTitle="Home" fullHeroImage={true}>

      <div id='newestBlogEntriesSection' className='main-section-container'>
        <div className='main-section-title'>
          <span>Blog</span> News
        </div>
        <BlogEntries limitResults={3} linkPrefix={'blog/'}></BlogEntries>
      </div>


      <div id='spotlight' className='main-section-container'>
        <div className='main-section-title'>
          Spot<span>light</span>
        </div>
        <h1 className='main-section-subtitle'>
          - {mdxNodeData.frontmatter.spotlight_title} -
        </h1>
        <p className='main-section-subtitle-text'>
          {mdxNodeData.frontmatter.spotlight_text}
        </p>

        <div className='mrt-card-container mrt-flex-row mrt-flex-center mrt-mt3'>
          {
            allSpotlightImages.map((spotLightImage, imageIndex) => (
              <div key={spotLightImage.name} className='mrt-card mrt-flex-col mrt-flex-center mrt-m2 mrt-accented-border'>
                <div className='mrt-card-header'>
                  <h2 className='mrt-card-title'>{spotLightImage.title}</h2>
                  <p className='mrt-card-subtitle'>{spotLightImage.subtitle}</p>
                </div>
                <div className='mrt-card-body'>
                  <a className='mrt-clickable-img' onClick={() => { openLightbox(imageIndex) }}>
                    <GatsbyImage alt={spotLightImage.name}
                      image={getImage(spotLightImage.image_path.childImageSharp.thumb)}
                      imgStyle={{ borderRadius: '20px' }}>
                    </GatsbyImage>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      {
        isOpen && (
          <Lightbox
            mainSrc={mainSrc}
            nextSrc={nextSrc}
            prevSrc={prevSrc}
            imageTitle={imageTitle}
            imageCaption={imageCaption}
            onCloseRequest={onCloseLightbox}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + allSpotlightImages.length - 1) % allSpotlightImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % allSpotlightImages.length)
            }
          />
        )
      }

    </Layout >
  )
}

export const query = graphql`
  query {
    allMdx(
        filter: {fileAbsolutePath: {regex: "/molotow-riot-art/home/index.mdx/i" }}
      ) {
        nodes {
          body
          frontmatter {
            spotlight_title
            spotlight_text
            spotlight_images {
              name
              title
              subtitle
              image_path {
                childImageSharp {
                    thumb: gatsbyImageData(
                        width: 400
                        height: 400
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

export default IndexPage