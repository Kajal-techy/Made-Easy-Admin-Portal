import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";

class ProductAction {

    getAllProducts() {
        // Hey dispatcher, go tell all the stores that a yarn requirement was posted
        dispatcher.dispatch({
            actionType: actionTypes.ALL_PRODUCTS
        });
    }
}
export default new ProductAction();
