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
            message: 'test'
        }
     };

    window.app = new Vue(options);
} 