import { decorate, observable, action } from "mobx";
import axios from "axios";
import Carda from "../components/card";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
  }
  // GETS THE ALL PRODUCTS
  getProducts() {
    axios
      .get("http://192.168.100.244:8000/api/list/")
      .then(res => res.data)
      .then(items => {
        this.product = items;
      })
      .catch(err => console.error(err));
  }
  // GET A PRODUCT BY
  getProductsById(id) {
    axios
      .get("http://192.168.100.244:8000/api/details/" + id + "/")
      .then(res => res.data)
      .then(detail => {
        this.detailedProduct = detail;
      });
  }
}
decorate(Store, {
  product: observable,
  getProducts: action,
  detailedProduct: observable
});

const store = new Store();
store.getProducts();
export default store;

// 1. Remove unused imports
// 2. Structure the key/value pairs inside decorate so its clear to know where observable starts and ends
// so product then detailedProduct then u can add the functions/computed parts
// 3. Create an axios instance so you don't have to repeat the same url more than once
// 4. getProductsById should have a catch if an error does occure
// 5.             .get("http://192.168.100.244:8000/api/details/" + id + "/")
//                Can be changed into
//                .get(`http://192.168.100.244:8000/api/details/${id}/`)
// 6. getProductsById should be listed as an action in the decorate function
// 7. getProductsById should be singular because your only getting one product getProductById
