import {Product} from './modules/product.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, child, get, set} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {Kundvagn} from './modules/kundvagn.js';
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
const db = getDatabase(app);
const dbRef = ref(db);
const writeUserData = (uid, cartSession) => {
  set(ref(db, 'Session/' + 'User/' + uid), {
    cart: cartSession
  });
}

const getCookie = (cookie) => {
  const name = cookie + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach((val) => {
     if (val.indexOf(name) === 0) value = val.substring(name.length);
   });
  return value;
};

const getId = (x) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = characters.length;
  let y = 0;
  while (y < x) {
    result += characters.charAt(Math.floor(Math.random() * length));
    y += 1;
  }
  return result;
}

let uid;

if(!getCookie('user')){
  uid = getId(12+(Math.floor(Math.random() * 24)))
  document.cookie = `user=${uid};path=/;max-age=31536000;`;
} else {
  uid = getCookie('user');
}

get(child(dbRef, `Session/User/${uid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    let val = snapshot.val();
    sessionStorage.setItem('cart', val.cart);
  } else {
    writeUserData(uid, '[]')
  }
}).catch((error) => {
  console.error(error);
});

let container = document.querySelector('#container');

get(child(dbRef, `Product/`)).then((snapshot) => {
  if (snapshot.exists()) {
    let prodArr = snapshot.val();
    prodArr.forEach(obj =>{
      new Product(obj, container, uid);
    })
  }
}).catch((error) => {
  console.error(error);
});

const kundvagn = document.querySelector('.kundvagn');
kundvagn.addEventListener('click', function(){
  let k = new Kundvagn(uid);
  k.loadCart(container);
})


