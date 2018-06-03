//import { OnLoadHandler } from "./file.js";
//import Vue from "vue";

document.onreadystatechange = OnLoadHandler;

function OnLoadHandler() {
    if (document.readyState === "complete") {
        init();
    }
}

function init() {
    const options = {
        el: "#app",
        data: {
            message: "data.message test",
            message2: "data.message2 test " + new Date().toLocaleString(),
            messageB: "data.messageB test " + new Date().toLocaleString(),
            title: "data.title test" + new Date().toLocaleString(),
            isVisible: true,
            planets: [
                {
                    id:1,
                    "name": "Yavin IV",
                    "rotation_period": "24",
                    "orbital_period": "4818",
                    "diameter": "10200",
                    "climate": "temperate, tropical",
                    "gravity": "1 standard",
                    "terrain": "jungle, rainforests",
                    "surface_water": "8",
                    "population": "1000",
                    "residents": [],
                    "films": [
                        "https://swapi.co/api/films/1/"
                    ],
                    "created": "2014-12-10T11:37:19.144000Z",
                    "edited": "2014-12-20T20:58:18.421000Z",
                    "url": "https://swapi.co/api/planets/3/"
                },
                {
                    id:2,
                    "name": "Alderaan",
                    "rotation_period": "24",
                    "orbital_period": "364",
                    "diameter": "12500",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grasslands, mountains",
                    "surface_water": "40",
                    "population": "2000000000",
                    "residents": [
                        "https://swapi.co/api/people/5/",
                        "https://swapi.co/api/people/68/",
                        "https://swapi.co/api/people/81/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/1/"
                    ],
                    "created": "2014-12-10T11:35:48.479000Z",
                    "edited": "2014-12-20T20:58:18.420000Z",
                    "url": "https://swapi.co/api/planets/2/"
                },
                {
                    id:3,
                    "name": "Tatooine",
                    "rotation_period": "23",
                    "orbital_period": "304",
                    "diameter": "10465",
                    "climate": "arid",
                    "gravity": "1 standard",
                    "terrain": "desert",
                    "surface_water": "1",
                    "population": "200000",
                    "residents": [
                        "https://swapi.co/api/people/1/",
                        "https://swapi.co/api/people/2/",
                        "https://swapi.co/api/people/4/",
                        "https://swapi.co/api/people/6/",
                        "https://swapi.co/api/people/7/",
                        "https://swapi.co/api/people/8/",
                        "https://swapi.co/api/people/9/",
                        "https://swapi.co/api/people/11/",
                        "https://swapi.co/api/people/43/",
                        "https://swapi.co/api/people/62/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/5/",
                        "https://swapi.co/api/films/4/",
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/3/",
                        "https://swapi.co/api/films/1/"
                    ],
                    "created": "2014-12-09T13:50:49.641000Z",
                    "edited": "2014-12-21T20:48:04.175778Z",
                    "url": "https://swapi.co/api/planets/1/"
                }
            ]
        },
        methods: {
            myFunction: function () {
                this.message = this.message.split('').reduce((acum, element, index, array) => {
                    acum.unshift(element);
                    return acum;
                }, []).join('');
            },

            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        },
        created: function() {
            console.log("Created. some data = " + this.message);
        }
    };
    Vue.component('planet-info', {
        props: ['planet'],
        template: '<li>{{planet.name}}</li>'
    });



    window.app = new Vue(options);
    window.app.$watch('message', (newVal, oldValue)=>{
        console.log(newVal);
        console.log(oldValue);
    });
} 