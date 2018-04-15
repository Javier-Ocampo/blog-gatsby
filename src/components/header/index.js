import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'
import './style.css'

const Header = () => (
  <div
    style={{
      background: '#3F2FE9',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <img src={logo} alt='Logo' className='logoHeader' />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
