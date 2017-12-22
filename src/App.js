import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entities: []
    };
  }

  componentDidMount() {
    axios.get('/api/entity')
      .then(res => {
        this.setState({ entities: res.data });
        console.log(this.state.entities);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ENTITY CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Entity</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {this.state.entities.map(entity =>
                  <tr>
                    <td><Link to={`/show/${entity._id}`}>{entity.number}</Link></td>
                    <td>{entity.name}</td>
                    <td>{entity.gender}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
