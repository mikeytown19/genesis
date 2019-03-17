/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Testimonials from '../components/Testimonials'

// import Offerings from '../components/Offerings'
// import Testimonials from '../components/Testimonials'

import Logo from '../img/logos/genesis-side.png'
import Forest from '../img/forest.jpg'


export const HomePageTemplate = ({
  title,
  heading,
  content,
  twoColumn,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div className="  bg-home">
      <section className='section is-bold'>
          <div className='flex-center'>
            <img src={Logo} alt=''/>




          </div>
      </section>
    </div>
    <br />

    <div className='columns'>
      <div className='column is-half'>
        <p className='title has-text-primary'>
          Our Mission
        </p>
        <p>We are a highly experienced excavation company that has worked hard to achieve the wonderful reputation we have today. In fact, we are known as the company that can do it all, and that’s because we can! Our clients can always rely on us to go the extra mile for them. If you’ve never worked with us, you’ll be in for a unique experience when you see how detailed we are and how closely we listen to you to make sure our work turns out exactly as you want. Call us for a free estimate</p>
      </div>
      <div className='column is-half'>
        <img src={Forest} alt=''/>
      </div>
    </div>

        <div className='columns'>
      <section className='section'>
      <h3 className='has-text-weight-semibold is-size-3 has-text-primary'>Testimonials</h3>
   <Testimonials testimonials={testimonials} />
      </section>
    </div>


  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.string,
  twoColumn: PropTypes.shape({
    columns: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  console.log(data)
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      content={frontmatter.content}
      twoColumn={frontmatter.twoColumn}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading

        content
        twoColumn {
          columns {
            title
            text
          }
        }
        description
        offerings {
          blurbs {
            title
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
