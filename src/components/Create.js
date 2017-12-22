import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      number: '',
      name: '',
      height: '',
      gender: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { number, name, height, gender } = this.state;

    axios.post('/api/entity', { number, name, height, gender })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { number, name, height, gender } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD ENTITY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Entity List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="number">Number:</label>
                <input type="text" class="form-control" name="number" value={number} onChange={this.onChange} placeholder="Number" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="height">Height:</label>
                <input type="text" class="form-control" name="height" value={height} onChange={this.onChange} placeholder="Height" />
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" name="gender" value={gender} onChange={this.onChange} placeholder="Gender" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
