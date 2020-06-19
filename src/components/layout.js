import React from "react";
import "../assets/css/designsystem.css"
import "./layout.css"
import Menu from "./menu";
import Sidebar from "./sidebar";
import { StaticQuery, graphql } from "gatsby";

export default props => {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        },
        topics: allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date] }
          ) {
          edges {
            node {
              frontmatter {
                categories
                tags
              }
            }
          }
        }
      }
    `}
      render={data => (
        <div className="app">
          <Menu title={data.site.siteMetadata.title} />
          <div className="main Grid Grid--withoutGutter">
            <div className="content u-size9of12">{children}</div>
            <div className="sidebar u-size3of12">
              <Sidebar
                edges={data.topics.edges}
              />
            </div>
          </div>
        </div>
      )}
    />
  )
}