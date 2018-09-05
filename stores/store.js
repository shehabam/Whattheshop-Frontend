import { decorate, observable, action } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
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

  getProductDetail(id) {
    const detailedObj = this.product.find(item => +item.id === +id);

    return detailedObj;
  }
}
decorate(Store, {
  product: observable,
  getProducts: action,
  getProductsById: action,
  detailedProduct: observable,
  userDetails: observable,
  getProductDetail: action
});

const store = new Store();
store.getProducts();
export default store;
