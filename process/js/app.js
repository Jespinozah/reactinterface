var React = require ('react');
var ReactDOM = require ('react-dom');


var MainInterface = React.createClass({

  getInitialState : function () {
    return {
      apts : [
  {
    "petName": "Buffy",
    "ownerName": "Hassum Harrod",
    "aptDate": "2016-06-20 15:30",
    "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
  },
  {
    "petName": "Spot",
    "ownerName": "Constance Smith",
    "aptDate": "2016-06-24 08:30",
    "aptNotes": "This German Shepherd is having some back pain"
  },
  {
    "petName": "Goldie",
    "ownerName": "Barot Bellingham",
    "aptDate": "2016-06-22 15:50",
    "aptNotes": "This Goldfish has some weird spots in the belly"
  },
  {
    "petName": "Mitten",
    "ownerName": "Hillary Goldwyn",
    "aptDate": "2016-06-21 9:15",
    "aptNotes": "Cat has excessive hairballs"
  }
   ]
    }
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
