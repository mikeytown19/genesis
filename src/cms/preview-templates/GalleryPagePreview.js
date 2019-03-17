/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { GalleryPageTemplate } from '../../templates/gallery-page'

const GalleryPageTemplate = ({ entry, getAsset }) => {
  const entryOwnerships = entry.getIn(['data', 'Ownerships'])
  const Ownerships = entryOwnerships ? entryOwnerships.toJS() : []

  return (
    <GalleryPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      Ownerships={Ownerships}
    />
  )
}

GalleryPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPageTemplate
