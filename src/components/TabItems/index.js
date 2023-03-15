import './index.css'

const TabItem = props => {
  const {tabDetails, onTabClick, activeClassName} = props
  const {tabId, displayText} = tabDetails

  const onTab = () => {
    onTabClick(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
