import { decorate, observable, action } from "mobx";
import axios from "axios";
import { Redirect } from "react-router-native";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
    this.userDetails = null;
    this.order = [];
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
  //  chekout functionality
  checkout() {
    console.log(this.order);
    axios
      .post("http://192.168.100.244:8000/api/orders/", this.order)
      .then(
        res =>
          res.status === 201 ? alert("Horray") : alert("Something Went Wrong")
      )
      .catch(err => console.error(err));
  }

  addToCart(item_id) {
    const isAvailable = this.order.find(product => product.id === item_id);
    if (isAvailable) {
      isAvailable.quantity += 1;
    } else {
      let item = this.getProductDetail(item_id);
      let item_added = { ...item, quantity: 1 };
      this.order.push(item_added);
    }
  }
  // addToTheCartList(id, name, price, img, description) {
  //   this.CartList.push({
  //     id: id,
  //     name: name,
  //     price: price,
  //     img: img,
  //     description: description
  //   });
  //   this.counter += 1;
  // }
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
  order: observable,
  counter: observable,
  addToTheCartList: action,
  addToCart: action,
  checkout: action
});

const store = new Store();
store.getProducts();
export default store;
