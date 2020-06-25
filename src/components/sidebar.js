import React from "react"
import "./sidebar.css"
import slug from "slug"
import { Link } from "gatsby"
import Img from "gatsby-image"
import calendar from "../assets/image/calendar.svg"

export default props => {
  const { edges } = props
  let tags = []
  let categories = []
  let news = []

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, node.frontmatter.tags]))
    categories = Array.from(
      new Set([...categories, node.frontmatter.categories])
    )
    news = Array.from(new Set([...news, node]))
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
            <Link
              to={`/category/${slug(category).toLowerCase()}/`}
              className="u-textGray u-fontMedium u-text500 hover:u-textNegative"
            >
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
          class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden u-marginBottomMedium"
          style={{ height: "4px", animationDuration: "2000ms" }}
        ></div>
        <div className="u-flex u-flexWrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag u-paddingHorizontalSmall u-paddingVerticalExtraSmall u-border u-borderDashed u-marginExtraSmall hover:u-backgroundNegative hover:u-textWhite"
            >
              <Link
                to={`/tag/${slug(tag).toLowerCase()}/`}
                className="u-textGray u-fontMedium u-text500 hover:u-textWhite"
              >
                {tag}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div className="u-paddingMedium">
        <h1 className="u-marginNone">Recent News</h1>
        <div
          class="Skeleton u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden u-marginBottomSmall"
          style={{ height: "4px", animationDuration: "2000ms" }}
        ></div>
        {news.map((new1, index) => (
          <div key={index} className="u-flex u-flexColumn">
            <div className="Grid Grid--smallGutter u-paddingExtraSmall u-alignItemsCenter">
              <div className="u-positionRelative u-size1of3">
                <Img
                  className="u-widthFull u-border"
                  fluid={new1.frontmatter.image.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div className="u-size2of3 u-paddingLeftSmall">
                <div className="u-fontBold">
                  <Link to={new1.fields.slug}>{new1.frontmatter.title}</Link>
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
                  <div
                    className="u-text100 u-alignItemCenter"
                    style={{ paddingTop: "3px" }}
                  >
                    {new1.frontmatter.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
