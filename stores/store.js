import { decorate, observable, action } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
    this.CartList = [];
    this.counter = 0;
    this.userDetails = null;
  }
  // GETS THE ALL PRODUCTS
  getProducts() {
    axios
      .get("http://127.0.0.1:8000/api/list/")
      .then(res => res.data)
      .then(items => {
        this.product = items;
      })
      .catch(err => console.error(err));
  }
  // http://192.168.100.244:8000/
  // GET A PRODUCT BY
  getProductsById(id) {
    axios
      .get("http://127.0.0.1:8000/api/details/" + id + "/")
      .then(res => res.data)
      .then(detail => {
        this.detailedProduct = detail;
      });
  }

  // ADD THE PRODUCT TO THE CARTLIST
  addToTheCartList(id, name, price, img, description) {
    this.CartList.push({
      id: id,
      name: name,
      price: price,
      img: img,
      description: description
    });
    this.counter += 1;
    console.log(this.counter);
  }
}
decorate(Store, {
  product: observable,
  getProducts: action,
  CartList: observable,
  addToTheCartList: action,
  counter: observable,
  getProductsById: action,
  detailedProduct: observable,
  userDetails: observable
});

const store = new Store();
store.getProducts();
export default store;
