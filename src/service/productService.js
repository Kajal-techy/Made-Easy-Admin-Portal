import axios from 'axios';

export function getAllProducts() {

    const PRODUCT_URL = 'http://localhost:9092/api';
    return axios.get(`${PRODUCT_URL}/products`);
}