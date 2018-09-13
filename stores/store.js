import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { Redirect } from "react-router-native";
import { AsyncStorage } from "react-native";

class Store {
  constructor() {
    this.product = null;
    this.detailedProduct = null;
    this.userDetails = null;
    this.order = [];
    this.counter = 0;
    this.orderHistory = null;
    this.filteredProducts = null;
    this.theQuery = "";
    this.categoryList = null;
    this.productWithCat = null;
  }
  getProducts() {
    axios
      .get("http://192.168.100.244:8000/api/list/")
      // .get("http://127.0.0.1:8000/api/list/")
      .then(res => res.data)
      .then(items => {
        this.product = items;
        this.filteredProducts = items;
        this.filteredCategories = items;
      })
      .catch(err => console.error(err));
  }
  getProductByCategory(id) {
    const card_obj = this.product.find(item => +item.id === +id);
    this.productWithCat = card_obj;
  }

  getProductDetail(id) {
    let items = [];
    this.product.forEach(category => {
      items = items.concat(category.items.slice());
    });

    const detailedObj = items.find(item => +item.id === +id);
    return detailedObj;
  }
  //  chekout functionality
  checkout() {
    console.log(this.order);
    axios
      .post("http://192.168.100.244:8000/api/acceptingOrders/", this.order)
      .then(
        res =>
          res.status === 201 ? alert("Horray") : alert("Something Went Wrong")
      )
      .catch(err => console.error(err));

    this.order.length = 0;
    this.counter = 0;
  }

  onSearchProductChangeHandler(e) {
    const list = this.product.filter(product =>
      product.name.toLowerCase().includes(e)
    );
    this.filteredProducts = list;
  }
  changeProductValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchProductChangeHandler(this.theQuery);
  }
  // ##########################################
  onSearchCategoryChangeHandler(e) {
    const list = this.product.filter(product =>
      product.category.category_name.toLowerCase().includes(e)
    );
    this.filteredProducts = list;
  }
  changeCategoryValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchCategoryChangeHandler(this.theQuery);
  }

  addToCart(item_id) {
    const isAvailable = this.order.find(product => product.id === item_id);
    if (isAvailable) {
      isAvailable.quantity += 1;
      this.counter += 1;
    } else {
      let item = this.getProductDetail(item_id);
      let item_added = { ...item, quantity: 1 };
      this.order.push(item_added);
      this.counter += 1;
    }
  }
  increaseFromCart(id) {
    const isAvailable = this.order.find(product => product.id === id);
    if (isAvailable) {
      isAvailable.quantity += 1;
      this.counter += 1;
    }
  }

  getOrdersHistory() {
    axios
      .get("http://192.168.100.244:8000/api/orders/history/")
      .then(res => res.data)
      .then(history => (this.orderHistory = history))
      .catch(err => console.error(err));
  }

  decreaseFromCart(id) {
    let itemIndex = null;
    const isAvailable = this.order.find(product => product.id === id);
    if (isAvailable) {
      isAvailable.quantity -= 1;
      this.counter -= 1;
      if (isAvailable.quantity === 0 || this.counter === 0) {
        alert("IT IS ZEEEERO");
        let index = this.order.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
          this.order.splice(index, 1);
        }
      }
    }
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
  increaseFromCart: action,
  decreaseFromCart: action,
  checkout: action,
  orderHistory: observable,
  query: observable,
  theQuery: observable,
  filteredProducts: observable,
  categoryList: observable,
  getProductByCategory: action,
  productWithCat: observable
});

const store = new Store();
store.getProducts();

export default store;
