class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bold: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseover(e) {
    this.setState({bold: true})
  }

  onMouseout(e) {
    this.setState({bold: false})
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}>{this.props.grocery}</li>
      // <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.grocerys.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
)

var App = () => (
  <div>
    <h2>This is a Grocery List</h2>
    <GroceryList grocerys={['Cookies', 'Milk', 'Bread']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));