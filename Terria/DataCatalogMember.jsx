var DataCatalogItem = require('./DataCatalogItem.jsx');
var DataCatalogMember = React.createClass({
  getInitialState: function() {
    return {isOpen: false};
  },

  handleClick: function(event) {
    this.setState({isOpen: !this.state.isOpen});
  },

  componentWillUpdate: function(catalogGroup, state) {
    var member = catalogGroup.member;
    member.isOpen = state.isOpen;    
  },

  render: function(){
    var member = this.props.member;
    var items = this.props.items;

    var content;

    if(this.state.isOpen === true && items && items.length > 0){
      content = items.map(function(item, i){return <DataCatalogItem item={item} key={i} />});
    } else if(this.state.isOpen === true){
      content = "Loading";
    } else{
      content = '';
    }

    iconClass = 'fa fa-chevron-' + (this.state.isOpen ? 'down' : 'right');
    return (
      <li>
      <button onClick={this.handleClick} className="btn data-group is-open"><i className={iconClass}></i>{member.name}</button>
      <ul className='list-reset'>
        {content}
      </ul>
      </li>
      );
  }
});

module.exports = DataCatalogMember;
