var React = require ('react');
var ReactDOM = require ('react-dom');

var MainInterface = React.createClass({

  getInitialState : function () {
    return {
      title : 'Appointments',
      show : true,
    }
  },
  
  render: function () {

    var showtitle;

    if (this.state.show) {
      showTitle = 'New ';
    }

    var displayList = {
      display: this.state.show ? 'block': 'none',
      color : 'red',
    }
    return (
      <div className = "interface">
       <h1>{showTitle}{this.state.title}</h1>
        <ul style = {displayList}>
         <li>Buffy 3: 30</li>
         <li>Spot 4: 30</li>
        </ul>
     </div>
    )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
);
