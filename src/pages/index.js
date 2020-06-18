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
        <div>
          <div
            class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden"
            style={{ height: "4px", animationDuration: "2000ms" }}
          ></div>
        </div>
        <div className="u-flex u-flexWrap u-justifyContentBetween u-marginTopMedium">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div
              key={index}
              className="u-marginSmall"
              style={{ maxWidth: "30%" }}
            >
              <div className="u-positionRelative">
                <div
                  className="u-positionAbsolute u-paddingVerticalTiny u-paddingHorizontalExtraSmall u-backgroundWhite u-textDark u-border"
                  style={{ zIndex: "2", marginTop: "80%", marginLeft: "10%" }}
                >
                  {node.frontmatter.tags}
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
                  style={{ width: "50%" }}
                >
                  <img
                    src={author}
                    alt=""
                    className="u-marginRightExtraSmall u-textNegative"
                    style={{ color: "red" }}
                  />
                  <Link
                    to={node.fields.slug}
                    className="u-text200 u-textDark u-fontBold"
                    style={{ textDecoration: "none", paddingTop: "3px" }}
                  >
                    Admin by {node.frontmatter.author}
                  </Link>
                </div>
                <div
                  className="u-flexInline u-alignItemCenter u-textDark"
                  style={{ width: "50%" }}
                >
                  <img
                    src={calendar}
                    alt=""
                    className="u-marginRightExtraSmall"
                  />
                  <div className="u-text200" style={{ paddingTop: "2px" }}>
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
            tags
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
