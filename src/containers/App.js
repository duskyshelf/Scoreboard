import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Scoreboard from '../components/Scoreboard'
import * as Actions from '../actions'

const App = ({todos, actions}) => (
  <div>
    <Scoreboard />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
