import { OnLoadHandler } from "./file.js";
//import Vue from "vue";
document.onreadystatechange = OnLoadHandler;

const options = { 
    el: '#app',
    data: {message: 'test'}
 };

const app = new Vue(options);