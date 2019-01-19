
class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to blockGames</h2>
        </div>
        <div class="listing">
        <h2>take a look at some games and purchase one to reveal the code!</h2>
        </div>
        
        <p className="App-intro">
          <Checkout
            name={'The Road to learn React'}
            description={'Open Source React Book'}
            amount={1}
          />
        </p>
        <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>
      </div>
    );
  }
}

export default Product;
