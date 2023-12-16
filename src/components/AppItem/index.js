// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-item-container">
      <img
        className="app-item-image"
        src={imageUrl}
        alt={appName}
        value={category}
      />
      <p className="app-item-title">{appName}</p>
    </li>
  )
}

export default AppItem
