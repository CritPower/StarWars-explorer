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
        el: "#app",
        data: {
            message: "data.message test",
            message2: "data.message2 test " + new Date().toLocaleString(),
            messageB: "data.messageB test " + new Date().toLocaleString(),
            title: "data.title test" + new Date().toLocaleString(),
            isVisible: true
        }
     };

    window.app = new Vue(options);
} 