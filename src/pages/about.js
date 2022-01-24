import * as React from 'react'
import Layout from './components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About MRA">
      <div id='aboutMainSection' className='main-section-container'>
        <div className='main-section-title'>
          About<br /><span>Molotow </span> Riot <span>Art</span>
        </div>
        <h1 className='main-section-subtitle'>
          ---
        </h1>

        <div className="mdx-container">
          <MDXRenderer>
            {data.allMdx.nodes[0].body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
        filter: {fileAbsolutePath: {regex: "/molotow-riot-art/about/index.mdx/i" }}
      ) {
        nodes {
          body
        }
      }
    }
`

export default AboutPage