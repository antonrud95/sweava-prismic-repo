require('dotenv').config()

const {
  PRISMIC_NAME,
  PRISMIC_ACCESS_TOKEN,
} = process.env

module.exports = {
  siteMetadata: {
    title: "sweava-site",
    siteUrl: 'http://localhost:8000',
    description: 'sweava-site',
    author: 'anton-rud',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway\:400,500,600,700` 
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_NAME,
        accessToken: PRISMIC_ACCESS_TOKEN,
        schemas: {
          page: require('./src/schemas/page.json'),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true
        },
      }
    }
  ],
};
