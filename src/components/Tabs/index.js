import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, changeActiveTab} = props
  const {tabId, displayText} = tabDetails
  const listClassName = isActive ? 'list-container active' : 'list-container'
  const buttonClassName = isActive ? 'button active-tab' : 'button'

  const onChangeActiveTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className={listClassName}>
      <button
        type="button"
        className={buttonClassName}
        onClick={onChangeActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
