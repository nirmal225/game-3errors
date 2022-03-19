import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeActiveImage} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onChangeImageView = () => {
    changeActiveImage(id)
  }

  return (
    <li className="list-item-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onChangeImageView}
      >
        <img alt="thumbnail" className="thumbnail-image" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
