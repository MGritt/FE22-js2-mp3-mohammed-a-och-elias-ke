import {Product} from './js/modules/product.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {Kundvagn} from './js/modules/kundvagn.js';
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



let container = document.querySelector('#container');


let Array = [    {
  "id": 1,
  "Description": "The Lyle & Scott Ribbed Quarter Men's Zip Jumper, with a zipper at the neck and signature Golden Eagle badge, is a winter must-have that can be dressed up, kept casual, and paired with just about anything.",
  "Name": "Lyle & Scott",
  "Picture": "https://lp2.hm.com/hmgoepprod?set=source[/00/e6/00e606ff38f4fedc37fcaa4d1cc6df237c2a827d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  "Price": "650kr",
  "Inventory" : 100
  
},
{
  "id": 2,
  "Description": "In a Centre Hood, everything feels simple. All classic details such as ribbed cuffs, kangaroo pocket and hood in double layers and with drawstring. Fine material of polyester and cotton that is grown in a more sustainable way based on the Better cotton initiative (BCI). The fit is normal and the feeling beyond.",
  "Name": "Björn Borg - Centre Hoodie",
  "Picture": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1d%2F89%2F1d896e3831758dcab68f42de9b21fbca68daa337.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "Price": "599 kr",
  "Inventory" : 100
},
{
  "id": 3,
  "Description": "A classic hoodie in soft cotton and recycled fleece. The sweater has a coarser zipper at the front, hood with drawstring and ribbed cuffs. The fit is easily oversized with dropped shoulders. Size S measures 116 cm in chest circumference, 73 cm in length and with 63 cm long sleeves.",
  "Name": "Weekday ",
  "Picture": "https://lp.weekday.com/app003prod?set=quality%5B79%5D%2Csource%5B%2Fcb%2F16%2Fcb16cf352a3f9d812f2a6e4c3c8f853640506087.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D%2Ctarget%5Bhm.com%5D&call=url[file:/product/main]",
  "Price": "450kr",
  "Inventory" : 100
},
{
  "id": 4,
  "Description": "Ordinary hoodie in French terry quality, with the large linear logo with Fila contour on the chest.",
  "Name": "Fila",
  "Picture": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fef%2Fca%2Fefca83f832c6df67337fad2a9b554268c65b5193.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "Price": "499kr",
  "Inventory" : 100
},
{
  "id": 5,
  "Description": "A great companion on your next adventure - the Maddox Down Jacket is a heavy water and windproof down jacket. It has a boxy fit, two handy flap pockets as well as a removable hood. The garment also has the Les Deux patch logo in rubber on the sleeve and a 3D logo on the chest.",
  "Name": "Les Deux",
  "Picture": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F2f%2F782fdbe41f9fa26a0b4314540f2a15ed8941aca0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "Price": "1599kr",
  "Inventory" : 100
},]

Array.forEach(obj =>{
  new Product(obj, container);
  
})

const kundvagn = document.querySelector('.kundvagn');
kundvagn.addEventListener('click', function(){
  let k = new Kundvagn();
  k.loadCart();
})
