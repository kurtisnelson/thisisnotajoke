import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

class Layout extends React.Component {
  
  static get propTypes() {
              return {
                            children: PropTypes.object,
                          }
            }
        render() {
    return (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Helmet titleTemplate="%s - Kurt Nelson" defaultTitle="Kurt Nelson">
          <meta name="description" content="Urbanism is fun" />
        </Helmet>
        <h1>Kurt Nelson</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
