/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/chennai-chest-pain-number",
  siteMetadata: {
    title: `MGM Healthcare Chennai offers 24/7 emergency cardiac care`,
    siteUrl: `https://mgmhealthcare.in/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/assets/images/emergency/favicon.png",
      },
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://edumpusupskill.com/",
    //     sitemap: "https://edumpusupskill.com/sitemap-index.xml",
    //     policy: [{ userAgent: "*", Disallow: "/", Disallow: "/cgi-bin/" }],
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
