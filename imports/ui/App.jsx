import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
import Navbar from './Navbar.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div className="container">
        {/*<header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks"
          />
        </form>*/}
        <Navbar  items={ ['Randonnées', 'Où allons nous?', 'Pour qui?', 'Photos', 'Contactez-moi'] } />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
