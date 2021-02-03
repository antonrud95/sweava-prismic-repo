require('dotenv').config()

const {
  PRISMIC_NAME,
  PRISMIC_ACCESS_TOKEN,
} = process.env

module.exports = {
  siteMetadata: {
    title: "test",
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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_NAME,
        accessToken: PRISMIC_ACCESS_TOKEN,
        schemas: {
          hero: require('./src/schemas/hero.json'),
        },
      }
    }
  ],
};
