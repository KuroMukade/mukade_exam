import { API_PRODUCTS_BASE_URL } from "../../../constants/api";
import { makeApi } from "../../config";

const requestsApi = makeApi(API_PRODUCTS_BASE_URL);

export default requestsApi;