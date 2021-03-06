module.exports = {
  siteMetadata: {
    title: "Teach FE Design history",
  },
  plugins: [
    "gatsby-plugin-sass",
    {   resolve: "gatsby-transformer-remark",
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-classes`,
                    options: {
                        classMap: {
                            "heading[depth=1]": "govuk-heading-xl",
                            "heading[depth=2]": "govuk-heading-l",
                            "heading[depth=3]": "govuk-heading-m",
                            "heading[depth=4]": "govuk-heading-s",
                            "paragraph": "govuk-body",
                            "list[ordered=false]": "govuk-list govuk-list--bullet",
                            "list[ordered=true]": "govuk-list govuk-list--number"
                        }
                    }
                }
            ]
        }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/pages/markdown",
      },
      __key: "markdown",
    },
  ],
};
