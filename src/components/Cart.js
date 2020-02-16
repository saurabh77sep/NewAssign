import React from 'react';

import Sort from '../components/Sort';
import axios from 'axios';


const aStyle = {
  width: 200,
  height: 200
};

 

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: true,
      errors: null
    };
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this)
    this.sortByPriceDis = this.sortByPriceDis.bind(this)

  }

  sortByPriceAsc = () => {
    let sortedProductsAsc = this.state.users.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    })

    this.setState({
      users: sortedProductsAsc
    })
  }

  sortByPriceDesc = () => {
    let sortedProductsDesc = this.state.users.sort((a, b) => {
      return parseInt(b.price) - parseInt(a.price);
    })

    this.setState({
      users: sortedProductsDesc
    })
  }

  sortByPriceDis = () => {
    let sortedProductsDis = this.state.users.sort((a, b) => {
      return parseInt(b.discount) - parseInt(a.discount);
    })

    this.setState({
      users: sortedProductsDis
    })
  }


  getUsers() {
    axios

      .get("https://api.myjson.com/bins/qzuzi")

      .then(response =>
        response.data.map(user => ({
          id: `${user.id} `,
          name: `${user.name} `,
          price: `${user.price} `,
          discount: `${user.discount} `,
          category: `${user.category} `,
          img_url: `${user.img_url} `

        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;

    return (




      <React.Fragment>
        <Sort onsortByPriceAsc={this.sortByPriceAsc} onsortByPriceDis={this.sortByPriceDis} onsortByPriceDesc={this.sortByPriceDesc} />
        <div class="flex-container">

          {!isLoading ? (
            users.map(user => {
              const { id, name, price, discount, category, img_url } = user;
              return (

                <div key={id}>

                  <div><img src={img_url} style={aStyle} /></div>
                  <span>{name}</span><hr></hr>
                  <div>
                    <span className="price">&#x20B9;{price}</span> <span className="discount">{discount}% off</span>
                  </div>
                  <div>
                    <button className="button button4">Add to Cart</button>
                  </div>
                </div>


              );
            })
          ) : (
              <p className="loading">Loading...</p>
            )}


        </div>



      </React.Fragment>
    );
  }
}

export default Cart;
