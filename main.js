import { OnLoadHandler } from "./file.js";
document.onreadystatechange = OnLoadHandler;

const options = { 
    el: '#app',
    data: {message: 'test'}
 };

const app = new Vue(option);