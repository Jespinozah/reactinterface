var React = require('react');

var AptList = React.createClass({

  handleDelete : function() {
    this.props.OnDelete(this.props.wichItem)
  },
  
  render : function () {
    return (
      <li className = "pet-info media" >
        <div className = "media-left">
          <button className= "pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
            <span className= "glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className = "pet-info media-body">
            <div className = "pet-head">
              <span className = "pet-name">{this.props.singleItem.petName}</span>
              <span className = "apt-name pull-right">{this.props.singleItem.aptDate}</span>
            </div>
            <div className = "owner-name">
              <span className = "label-item">Owner :</span>
              {this.props.singleItem.ownerNames}
            </div>
            <div className = "apt-notes">
              {this.props.singleItem.aptNotes}
            </div>
        </div>
      </li>
    )
  }
});//AptList

module.exports = AptList;
