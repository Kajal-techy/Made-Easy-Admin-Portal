import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";
import * as ProductService from "../service/productService";

const CHANGE_EVENT = "CHANGE";

class ProductStore extends EventEmitter {

    _products = [];

    constructor() {
        super();
        Dispatcher.register(this.registerActions.bind(this));
    }

    registerActions(action) {
        switch (action.actionType) {
            case actionTypes.ALL_PRODUCTS:
                ProductService.getAllProducts().then(response => {
                    this.setAllProducts(response['data']);
                    this.emit(CHANGE_EVENT);
                }, (error) => {
                    console.log('Error = ' + JSON.stringify(error));
                })
                this.emit(CHANGE_EVENT);
                break;
            default:

        }
        return true;
    }

    setAllProducts(products) {
        this._products = products;
    }

    getAllProducts() {
        return this._products;
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default new ProductStore();
