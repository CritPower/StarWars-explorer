//import { OnLoadHandler } from "./file.js";
//import Vue from "vue";

document.onreadystatechange = OnLoadHandler;

function OnLoadHandler() {
    if (document.readyState === "complete") {
        init();
    }
}

function init(){
    const options = { 
        el: '#app',
        data: {
            message: 'test',
            title: 'title' + new Date().toLocaleString()
        }
     };

    window.app = new Vue(options);
} 