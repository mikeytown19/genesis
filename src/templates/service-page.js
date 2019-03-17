/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import tools from '../img/tractor.jpg'


export const ServicePageTemplate = ({
  title,
  meta_title,
  meta_description,
  services,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>


    <div className="section">
      <section className="columns is-desktop">
       <div className="column">
          <p className="title">Services</p>

          <ul>
            <li>Grading & Excavation</li>
            <li>Agricultural Grading ( Orchard, Vineyard & Landscape Prep )</li>
            <li>Custom Residential House Pads</li>
            <li>Rough & Fine Grading</li>
            <li>Septic Tanks</li>
            <li>Trenching & Dry Utility Installation ( Edison, Phone, Water, Gas )</li>
            <li>Road Construction & Driveways</li>
            <li>Drainage Systems & Culvert Pipe Installation</li>
            <li>V Ditch Installation</li>
            <li>Slope & Erosion Repair</li>
            <li>Brush & Land Clearing</li>
            <li>Orchard & Vineyard Removal</li>
            <li>Blending & Earth Moving</li>
            <li>Horse Arenas</li>
            <li>Storm Water Retention</li>
            <li>Erosion Control & Prevention</li>
            <li>Concrete & Asphalt</li>
          </ul>
          <br/>

        </div>

        <div className="column text-center align-self-center">
        <img className="tools" src={tools} alt=''/>
        </div>
      </section>

    </div>




        </div>
       )

ServicePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  services: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ServicePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <ServicePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      services={frontmatter.services}
    />
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const ServicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        services {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
