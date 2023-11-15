// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }
      const onChangeLeft = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const onChangeRight = event => {
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="loader-cont">
          <h1 className="main-head">Layout</h1>
          <div className="check-item">
            <input
              id="content"
              type="checkbox"
              onChange={onChangeContent}
              checked={showContent}
              className="input"
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="check-item">
            <input
              id="left"
              type="checkbox"
              onChange={onChangeLeft}
              checked={showLeftNavbar}
              className="input"
            />
            <label htmlFor="left" className="label">
              Left Navbar
            </label>
          </div>
          <div className="check-item">
            <input
              id="right"
              type="checkbox"
              onChange={onChangeRight}
              checked={showRightNavbar}
              className="input"
            />
            <label htmlFor="right" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
