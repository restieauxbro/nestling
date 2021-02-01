module.exports = {
  siteMetadata: {
    title: `The Nestling Process`,
    description: `A conversation framework for fostering a deep sense of safety, trust, and love in relationships.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: '@mkitio/gatsby-theme-password-protect',
    //   options: {
    //     password: 'yolo' // delete or `undefined` to disable password protection
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ari Amala`,
        short_name: `The Nestling Process`,
        start_url: `/`,
        background_color: `#fdf5ff`,
        theme_color: `#fdf5ff`,
        display: `minimal-ui`,
        icon: `src/images/cropped-solo-logo-32x32.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
