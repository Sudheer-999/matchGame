import './index.css'

const ThumbnailItems = props => {
  const {items, onThumbnailClick} = props
  const {id, thumbnailUrl} = items

  const onThumbnail = () => {
    onThumbnailClick(id)
  }

  return (
    <li className="thumbnail-item" onClick={onThumbnail}>
      <button type="button" className="thumbnail-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-icon" />
      </button>
    </li>
  )
}

export default ThumbnailItems
