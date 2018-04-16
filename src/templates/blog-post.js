import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

const Template = ({data, location, pathContext}) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <div>
      <Helmet title={`${frontmatter.title} - Blog`} />

      <div className='box-blog-post'>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{__html: html}} />

        <hr
          style={{
            marginBottom: '50px'
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          {prev && (
            <li>
              <Link to={prev.frontmatter.path}>
                <FontAwesomeIcon icon={faAngleLeft} className='prevt-icon' />
                {prev.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.frontmatter.path}>
                {next.frontmatter.title}
                <FontAwesomeIcon icon={faAngleRight} className='next-icon' />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pathContext: PropTypes.object
}

export default Template
