import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div
        style={{
          background: 'white',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <Link to={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          )
          )}
        </ul>
      </div>
    )
  }
}

AllTags.propTypes = {
  pathContext: PropTypes.object
}

export default AllTags
