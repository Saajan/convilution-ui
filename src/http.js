import axios from 'axios';

axios.defaults.baseURL = 'https://convilution-server.herokuapp.com/v1/';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const post = async (url, values, success=()=>{}, fail=()=>{}) => {
  axios.post(url, values)
    .then(response => success(response))
    .catch(response => fail(response))
}

const patch = async (url, values, success=()=>{}, fail=()=>{}) => {
  axios.patch(url, values)
    .then(response => success(response))
    .catch(response => fail(response))
}

const put = async (url, values, success=()=>{}, fail=()=>{}) => {
  axios.put(url, values)
    .then(response => success(response))
    .catch(response => fail(response))
}

const remove = async (url, success=()=>{}, fail=()=>{}) => {
  axios.delete(url)
    .then(response => success(response))
    .catch(response => fail(response))
}

const get = async (url) => {
  return axios.get(url)
}

export default {
  post,
  put,
  patch,
  get,
  delete: remove,
}