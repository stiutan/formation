import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/entity/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.entity.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Entity List</Link></h4>
            <dl>
              <dt>Number:</dt>
              <dd>{this.state.entity.number}</dd>
              <dt>Height:</dt>
              <dd>{this.state.entity.height}</dd>
              <dt>Gender:</dt>
              <dd>{this.state.entity.gender}</dd>
            </dl>
            <Link to={`/edit/${this.state.entity._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.entity._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
