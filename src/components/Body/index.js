// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-cont">
          {showLeftNavbar && (
            <nav className="nav-cont">
              <h1 className="nav-head">Left Navbar Menu</h1>
              <ul className="left">
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </nav>
          )}
          {showContent && (
            <div className="content-cont">
              <h1 className="nav-head">Content</h1>
              <p className="item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                non orci ullamcorper, interdum augue sit amet, scelerisque
                ligula. Donec egestas odio nec dolor posuere, sed dictum arcu
                scelerisque. Vivamus fermentum enim neque, eu faucibus diam
                consectetur sed. Vestibulum quis luctus metus.{' '}
              </p>
            </div>
          )}
          {showRightNavbar && (
            <nav className="nav-cont">
              <h1 className="nav-head">Right Navbar</h1>
              <div className="ad">
                <p className="item">Ad 1</p>
              </div>
              <div className="ad">
                <p className="item">Ad 2</p>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
