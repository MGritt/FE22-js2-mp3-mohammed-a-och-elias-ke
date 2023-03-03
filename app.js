import {Product} from './js/modules/product.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxYjwhJsPGuWHGVtR7q0LFzcjZf4MNG5g",
    authDomain: "storemp3-a5386.firebaseapp.com",
    projectId: "storemp3-a5386",
    storageBucket: "storemp3-a5386.appspot.com",
    messagingSenderId: "151590938643",
    appId: "1:151590938643:web:c7789c2ea59ca01041f7e6",
    databaseURL: 'https://storemp3-a5386-default-rtdb.europe-west1.firebasedatabase.app/'
  };
  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let obj =     {
    "Description": "The Lyle & Scott Ribbed Quarter Men's Zip Jumper, with a zipper at the neck and signature Golden Eagle badge, is a winter must-have that can be dressed up, kept casual, and paired with just about anything.",
    "Name": "Lyle & Scott",
    "Picture": "https://lp2.hm.com/hmgoepprod?set=source[/00/e6/00e606ff38f4fedc37fcaa4d1cc6df237c2a827d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
    "Price": "650kr"
  };

let theObj = new Product(obj);
