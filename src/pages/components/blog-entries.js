import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogEntries = ({ limitResults, linkPrefix }) => {
    // TODO: use this in query
    const blogEntries = useStaticQuery(graphql`
    query {
        allMdx(
            filter: {fileAbsolutePath: {regex: "/molotow-riot-art/blog/i" }}
            sort: {fields: frontmatter___date, order: DESC}
          ) {
          nodes {
            frontmatter {
              date(formatString: "DD.MMMM.YYYY", locale: "de")
              title
              hero_image_alt
              hero_image {
                childImageSharp {
                    thumb: gatsbyImageData(
                        width: 350
                        height: 230
                        placeholder: BLURRED
                    )
                    full: gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            id
            slug
          }
        }
      }
    `);

    const linkPrefixToUse = linkPrefix != undefined ? linkPrefix : '';

    if (limitResults && limitResults > 0 && blogEntries.allMdx?.nodes?.length >= limitResults) {
        blogEntries.allMdx.nodes = blogEntries.allMdx.nodes.slice(0, limitResults);
    }

    return (
        <div className='mrt-card-container mrt-flex-col'>
            {
                blogEntries.allMdx.nodes.map((blogEntry) => (
                    <div key={blogEntry.id} className='mrt-card mrt-default-border mrt-blogentry-card'>
                        <div className='mrt-blogentry-img'>
                            <GatsbyImage alt={blogEntry.frontmatter.hero_image_alt}
                                image={getImage(blogEntry.frontmatter.hero_image.childImageSharp.thumb)}
                                imgStyle={{ borderRadius: '0px' }}>
                            </GatsbyImage>
                        </div>
                        <div className="mrt-card-header">
                            <p className='mrt-card-subtitle mrt-mb1'>{blogEntry.frontmatter.date}</p>
                            <Link key={blogEntry.id} to={linkPrefixToUse + blogEntry.slug}>
                                <h2 className='mrt-card-title'>{blogEntry.frontmatter.title}</h2>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )


}

export default BlogEntries;