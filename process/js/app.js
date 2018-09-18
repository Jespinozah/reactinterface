var React = require ('react');
var ReactDOM = require ('react-dom');
var _ = require('lodash');

var AptList = require ('./AptList');
var AddAppointment = require('./AddAppointment');


var MainInterface = React.createClass({

  getInitialState : function () {
    return {
      apts : [],
      aptBodyVisble : false,

    }
  },

  componentDidMount: function () {
    this.serverRequest = $.get('./js/data.json', function (result) {
      var temApts = result;
      this.setState({
        apts : temApts,
      });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.serverRequest.abort();
  },

  deleteMessage : function(item) {
    var allApts = this.state.apts;
    var newApts = _.without(allApts, item);
    this.setState({
      apts : newApts
    });
  },

  toogleAddDisplay : function () {
    this.setState({
      aptBodyVisble : !this.state.aptBodyVisble,
    });
  },

  render: function () {
    var filteredApts = this.state.apts;
    filteredApts = filteredApts.map(function(item, index){
      return (
        <AptList
          key = {index}
          singleItem = {item}
          wichItem = {item}
          OnDelete = {this.deleteMessage}/>
      ) // return
    }.bind(this)); // filteredApts.map

    return (
      <div className = "interface">
          <AddAppointment bodyVisible = {this.state.aptBodyVisble}
          handleToogle = {this.toogleAddDisplay}/>
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
