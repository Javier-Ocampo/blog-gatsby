import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt'
import faTags from '@fortawesome/fontawesome-free-solid/faTags'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter, id } = post

        return (
          <div key={id} className='boxArticle'>
            <h1>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h1>
            <div className='dateAndTags'>
              <div className='date'>
                <FontAwesomeIcon icon={faCalendarAlt} className='iconsBlog' />
                {frontmatter.date}
              </div>
              <div className='tags'>
                <ul className='blogTags'>
                  <FontAwesomeIcon icon={faTags} className='iconsBlog' />
                  {post.frontmatter.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/tags/${tag}`}>
                          {tag}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <p>{frontmatter.excerpt}</p>
            <Link to={frontmatter.path} className='btn-read'>
              Read More
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
 query IndexQuery {
   allMarkdownRemark {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
           path
           tags
           excerpt
         }
       }
     }
   }
 }
`

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage
