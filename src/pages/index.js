import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import author from "../assets/image/author.svg"
import calendar from "../assets/image/calendar.svg"
// import slug from "slug";

export default ({ data }) => {
  return (
    <Layout>
      <div class="u-backgroundWhite u-paddingMedium">
        <h1 class="u-marginNone">Feature</h1>
        <div
          class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden"
          style={{ height: "4px", animationDuration: "2000ms" }}
        ></div>
        <div className="Grid Grid--smallGutter u-marginTopMedium">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div
              key={index}
              className="lg:u-size4of12 u-paddingSmall sm:u-size12of12 md:u-size0of12"
            >
              <div className="u-positionRelative">
                <div
                  className="u-positionAbsolute u-paddingVerticalTiny u-paddingHorizontalExtraSmall u-backgroundWhite u-textDark u-border u-roundedMedium hover:u-backgroundNegativeLight hover:u-textWhite u-fontMedium"
                  style={{ zIndex: "2", marginTop: "80%", marginLeft: "10%" }}
                >
                  {node.frontmatter.categories}
                </div>
                <Img
                  className="u-widthFull u-border"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <h4 className="u-flex u-flexWrap">
                <div
                  className="u-flexInline u-alignItemCenter u-textNegative"
                  style={{ width: "60%" }}
                >
                  <img
                    src={author}
                    alt=""
                    className="u-marginRightExtraSmall u-textNegative"
                    style={{ color: "red" }}
                  />
                  <Link
                    to={node.fields.slug}
                    className="u-text100 u-textDark u-fontBold"
                    style={{ textDecoration: "none", paddingTop: "3px" }}
                  >
                    Admin by {node.frontmatter.author}
                  </Link>
                </div>
                <div
                  className="u-flexInline u-alignItemCenter u-textDark"
                  style={{ width: "40%" }}
                >
                  <img
                    src={calendar}
                    alt=""
                    className="u-marginRightExtraSmall"
                  />
                  <div className="u-text100 u-alignItemCenter" style={{ paddingTop: "3px" }}>
                    {node.frontmatter.date}
                  </div>
                </div>
              </h4>
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug} className="u-textNegative">
                READMORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            author
            image {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
