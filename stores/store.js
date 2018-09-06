import { decorate, observable, action } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
    this.userDetails = null;
    this.CartList = [];
    this.counter = 0;
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

  getProductDetail(id) {
    const detailedObj = this.product.find(item => +item.id === +id);

    return detailedObj;
  }

  addToTheCartList(id, name, price, img, description) {
    this.CartList.push({
      id: id,
      name: name,
      price: price,
      img: img,
      description: description
    });
    this.counter += 1;
  }
  addFromList() {
    alert("its working ...");
  }
}
decorate(Store, {
  product: observable,
  getProducts: action,
  getProductsById: action,
  detailedProduct: observable,
  userDetails: observable,
  getProductDetail: action,
  CartList: observable,
  counter: observable,
  addToTheCartList: action
});

const store = new Store();
store.getProducts();
export default store;
