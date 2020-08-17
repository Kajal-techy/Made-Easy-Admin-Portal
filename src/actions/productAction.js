import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";

class ProductAction {

    getAllProducts() {
        dispatcher.dispatch({
            actionType: actionTypes.ALL_PRODUCTS
        });
    }
}
export default new ProductAction();
