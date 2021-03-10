import * as React from "react"
import { graphql } from 'gatsby'

import "../styles/global.sass"

// markup
const IndexPage = ({data}) => {
    console.log(data)
  return (
    <main>
      <title>Home Page</title>
      <h1 className="govuk-heading-l">
        Teach in further education design history
      </h1>
            {data.allMarkdownRemark.edges.map(e => {
                return (<div>
                    <h2 className="govuk-heading-l"><a href={e.node.frontmatter.slug}>{e.node.frontmatter.title}</a></h2>
                    <h4 className="govuk-heading-s">{e.node.frontmatter.date}</h4>
                    <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />
                </div>)
            })}
    </main>
  )
}

export const query = graphql`
    query IndexPageQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        date
                    }
                }
            }
        }
    }
`

export default IndexPage
