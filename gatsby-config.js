module.exports = {
  siteMetadata: {
    title: `Brayden Killeen`,
    description: `Personal Site of Brayden Killeen`,
    author: `Brayden Killeen`,
    siteUrl: `https://braydenkilleen.com`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brayden Killeen`,
        short_name: `BK`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
}
