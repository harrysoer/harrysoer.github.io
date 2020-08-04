/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { styled } from "twin.macro"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <GlobalStyles>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main>{children}</main>
      </div>
    </GlobalStyles>
  )
}

const GlobalStyles = styled.div`
  @font-face {
    font-family: "Righteous";
    src: url("../fonts/Righteous-Regular.ttf");
  }
`

export default Layout
