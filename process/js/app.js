var React = require ('react');
var ReactDOM = require ('react-dom');
var _ = require('lodash');

var AptList = require ('./AptList');
var AddAppointment = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');


var MainInterface = React.createClass({

  getInitialState : function () {
    return {
      apts : [],
      orderBy : 'petName',
      orderDir: 'asc',
      aptBodyVisble : false,
      queryText: '',

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
    var tempVisibility = !this.state.aptBodyVisble;
    this.setState({
      aptBodyVisble : tempVisibility,
    });
  },

  addItem : function(tempItem) {
    var tempApts = this.state.apts;
    tempApts.push(tempItem);
    this.setState({
      apts : tempApts,
    });
  },
   reOrder : function(orderBy, orderDir) {
     this.setState({
       orderBy : orderBy,
       orderDir : orderDir
     });
   },

   searchApts : function(p) {
     this.setState({
       queryText : p,
     });
   },

  render: function () {
    var filteredApts = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText


    myApts = this.state.apts;

    myApts.forEach (function (item){
      if(
        (item.petName.toLowerCase().indexOf(queryText)!=-1) ||
        (item.ownerName.toLowerCase().indexOf(queryText)!=-1) ||
        (item.aptDate.toLowerCase().indexOf(queryText)!=-1) ||
        (item.aptNotes.toLowerCase().indexOf(queryText)!=-1)
      ) {
        filteredApts.push(item);
      }
    });

    filteredApts = _.orderBy(filteredApts,function (item) {
      return item[orderBy].toLowerCase();
    }, orderDir);//orderBy

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
          <AddAppointment
          bodyVisible = {this.state.aptBodyVisble}
          handleToogle = {this.toogleAddDisplay}
          addApt = {this.addItem}
          />
          <SearchAppointments
          orderBy = {this.state.orderBy}
          orderDir = {this.state.orderDir}
          onReOrder = {this.reOrder}
          onSearch = {this.searchApts}
          />
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
