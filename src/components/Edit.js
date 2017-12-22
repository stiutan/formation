import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entity: {}
    };
  }

  componentDidMount() {
    axios.get('/api/entity/'+this.props.match.params.id)
      .then(res => {
        this.setState({ entity: res.data });
        console.log(this.state.entity);
      });
  }

  onChange = (e) => {
    const state = this.state.entity
    state[e.target.name] = e.target.value;
    this.setState({entity:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { number, name, height, gender } = this.state.entity;

    axios.put('/api/entity/'+this.props.match.params.id, { number, name, height, gender })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT ENTITY
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.entity._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Entity List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="number">Number:</label>
              <input type="text" class="form-control" name="number" value={this.state.entity.number} onChange={this.onChange} placeholder="Number" />
            </div>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" name="name" value={this.state.entity.name} onChange={this.onChange} placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="height">Height:</label>
              <input type="text" class="form-control" name="height" value={this.state.entity.height} onChange={this.onChange} placeholder="Height" />
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <input type="text" name="gender" value={this.state.entity.gender} onChange={this.onChange} placeholder="Gender" />
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
