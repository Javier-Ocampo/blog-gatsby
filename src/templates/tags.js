import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <div
        style={{
          background: 'white',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <span>
          Posts about {tagName}:
        </span>
        <ul
          style={{
            marginTop: '40px'
          }}
        >
          {posts.map((post, index) => (
            <li key={index}>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </li>
          )
          )}
        </ul>
        <hr
          style={{
            marginBottom: '50px'
          }}
        />
        <Link to='/tags'>
          All Tags
        </Link>
      </div>
    )
  }
}

Tags.propTypes = {
  pathContext: PropTypes.object
}

export default Tags
