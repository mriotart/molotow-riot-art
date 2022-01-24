module.exports = {
  pathPrefix: "/molotow-riot-art",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Molotow Riot Art",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },     
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/about`,
      },     
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `gallery`,
        path: `${__dirname}/gallery`,
      },     
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `home`,
        path: `${__dirname}/home`,
      },     
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        },
      },
    },
    
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    
    "gatsby-plugin-dark-mode",
  ],
};
