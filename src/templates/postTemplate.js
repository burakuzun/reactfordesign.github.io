import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle, color } from '../Tile'
import Nav from '../components/Nav'
import { Box } from 'rebass'
import Footer from '../components/Footer'
import { Markdown, RainbowHeading } from '../components/Text'
import CodeAnimation from '../components/CodeAnimation'

import "./syntax-highlight.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  console.log(data);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Box>
      <CodeAnimation />
        <Box px={[3,3,6]} py={[5,5]}>
          {frontmatter.title && (
            <RainbowHeading textAlign="center">{frontmatter.title}</RainbowHeading>
          )}
          <Box color={color.gray0} width={["100%", "670px"]} mx="auto">
            <Markdown
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
