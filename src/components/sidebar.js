import React from "react"
import "./sidebar.css"
import slug from "slug"
import { Link } from "gatsby"

export default props => {
  const { edges } = props
  let tags = []
  let categories = []

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, node.frontmatter.tags]))
    categories = Array.from(
      new Set([...categories, node.frontmatter.categories])
    )
  })

  return (
    <div>
      <div className="u-paddingMedium">
        <h1 className="u-marginNone">Categories</h1>
        <div
          class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden"
          style={{ height: "4px", animationDuration: "2000ms" }}
        ></div>
        {categories.map((category, index) => (
          <p key={index}>
            <Link to={`/category/${slug(category).toLowerCase()}/`} className="u-textGray u-fontMedium u-text500 hover:u-textNegative">
              {category}
            </Link>
            <div
              class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden u-marginTopSmall"
              style={{ height: "2px", animationDuration: "2000ms" }}
            ></div>
          </p>
        ))}
      </div>

      <div className="u-paddingMedium">
        <h1 className="u-marginNone">Thẻ</h1>
        <div
          class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden"
          style={{ height: "4px", animationDuration: "2000ms" }}
        ></div>
        {tags.map((tag, index) => (
          <p key={index}>
            <Link to={`/tag/${slug(tag).toLowerCase()}/`} className="u-textGray u-fontMedium u-text500 hover:u-textNegative">{tag}</Link>
            <div
              class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden u-marginTopSmall"
              style={{ height: "2px", animationDuration: "2000ms" }}
            ></div>
          </p>
        ))}
      </div>
    </div>
  )
}
