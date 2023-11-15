import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeft: true, showRight: true}

  onChangeContent = value => {
    this.setState({showContent: value})
  }

  onChangeLeft = value => {
    this.setState({showLeft: value})
  }

  onChangeRight = value => {
    this.setState({showRight: value})
  }

  render() {
    const {showContent, showLeft, showRight} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar: showLeft,
          showRightNavbar: showRight,
          onToggleShowContent: this.onChangeContent,
          onToggleShowLeftNavbar: this.onChangeLeft,
          onToggleShowRightNavbar: this.onChangeRight,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
