/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import Kory from '../img/tools.jpg'


export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="section">
        <div className='columns'>
          <div className='column is-two-thirds'>
            <p className="title">About Us</p>
            <p>We are a full service grading and excavation company. We prove that hard work does pay off by providing our clients with the very best results that are possible. We continue our operations all throughout the year, and always keep our schedule exact so we never take on more clients than we can handle. We are licensed, bonded and have contractors who have years of experience with all types of commercial and residential work. Our company also has the very best tools and machinery in the industry to ensure we can take care of any services that our customers might need.</p>

          </div>
          <div className='column '>
          <img src={Kory} alt=''/>
          </div>

        </div>
      </section>



    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
