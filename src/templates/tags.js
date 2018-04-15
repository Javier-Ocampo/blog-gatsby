import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <div>
        <span>
          Posts about {tagName}:
        </span>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </li>
          )
          )}
        </ul>
      </div>
    )
  }
}

Tags.propTypes = {
  pathContext: PropTypes.object
}

export default Tags
