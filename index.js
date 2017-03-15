//https://daveceddia.com/test-drive-react/

import React from 'react'

export default React.createClass({
  render: function() {
    return <div><div><Hello/> <World name="Dave"/></div><div><Hello/> <World2 who="Mat"/></div><div><Hello/> <World3/></div></div>
  }
})

var Hello = React.createClass({
  render: function() {
    return <span>Hello</span>
  }
})

var World = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired
  },
  render: function() {
    if(this.props.name === null){
      return <span>World!</span>
    } else {
      return <span>{this.props.name} {this.props.surname}!</span>
    }
  }
})

var World2 = React.createClass({
  render: function() {
    return <span>{this.props.who || 'world'}!</span>
  }
})

var World3 = React.createClass({
  render: function() {
    if(this.props.who === null){
      return <span>World!</span>
    } else {
      return <span>{this.props.who ? this.props.who : 'world'}!</span>
    }
  }
})
