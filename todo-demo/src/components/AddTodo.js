import React, { findDOMNode, Component, PropTypes} from 'react';

class AddTodo extends Component {
  render(){
    return (
      <div>
        <input type="text" ref='input' />
        <button onClick={e => this.handleClick(e)}>
          添加
        </button>
      </div>
    );
  }

  handleClick(e){
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
export default AddTodo;