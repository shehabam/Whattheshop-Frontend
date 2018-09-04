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
