/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ImageGallery from '../components/Gallery'
import Image from '../img/forest.jpg'

export const GalleryPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  Ownerships,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>

      <div className="section">
      <section className="columns">
       <div className="column gallery-images">
          <p className="title">Gallery</p>

          <ImageGallery />



         </div>
    </section>
    </div>



    </div>
  )
}

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  Ownerships: PropTypes.array,

}

const GalleryPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <GalleryPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      Ownerships={frontmatter.Ownerships}
    />
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GalleryPage

export const GalleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`
