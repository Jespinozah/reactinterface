var React = require ('react');
var ReactDOM = require ('react-dom');


var MainInterface = React.createClass({

  getInitialState : function () {
    return {
      apts : []
    }
  },

  componentDidMount: function () {
    this.serverRequest = $.get('./js/data.json', function (result) {
      var temApts = result;
      this.setState({
        apts : temApts
      });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.serverRequest.abort();
  },

  render: function () {
    var filteredApts = this.state.apts;
    filteredApts = filteredApts.map(function(item, index){
      return (
        <li className = "pet-info media" key = {index} >
          <div className = "pet-info media-body">
              <div className = "pet-head">
                <span className = "pet-name">{this.state.apts[index].petName}</span>
                <span className = "apt-name pull-right">{this.state.apts[index].aptDate}</span>
              </div>
              <div className = "owner-name">
                <span className = "label-item">Owner :</span>
                {this.state.apts[index].ownerNames}
              </div>
              <div className = "apt-notes">
                {this.state.apts[index].aptNotes}
              </div>
          </div>
        </li>
      ) // return
    }.bind(this)); // filteredApts.map

    return (
      <div className = "interface">
          <ul className = "item-list media-list">
            {filteredApts}
          </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
);
