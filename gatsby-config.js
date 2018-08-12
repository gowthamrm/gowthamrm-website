module.exports = {
  siteMetadata: {
    title: "Gowtham Raj",
    author: "Gtm",
    description: "This is an official site of Gowtham Raj, a creative front-end developer"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
