import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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

class CartManager {
    #ProductID
    #uid
    constructor(uid) {
      this.#uid = uid;
    }

    writeUserData(uid, cartSession){
      set(ref(db, 'Session/' + 'User/' + uid), {
        cart: cartSession
      });      
    }
  
    addToCart (item , amount){
      let cartSession = [];
      let inStorage = sessionStorage.getItem('cart');
      let jsonStorage = JSON.parse(inStorage);
      if(jsonStorage){
        cartSession.push(...jsonStorage);
      }
      if (cartSession.length == 0){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
      }
      if (cartSession && cartSession.length > 0){
        cartSession.forEach(function(itema){
        if (itema.id == item){
          itema.amount = itema.amount + amount;
         }
      })
      if(!JSON.stringify(cartSession).includes(`"id":${item}`)){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
        }
      }
      sessionStorage.setItem('cart', JSON.stringify(cartSession)); 
      let userSessionStorage = sessionStorage.getItem('cart')
      this.writeUserData(this.#uid, userSessionStorage);
    }
  
    removeFromCart (item , amount){
      let cartSession = [];
      let inStorage = sessionStorage.getItem('cart');
      let jsonStorage = JSON.parse(inStorage);
      if(jsonStorage){
        cartSession.push(...jsonStorage);
      }
      if (cartSession.length == 0){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
      }
      if (cartSession && cartSession.length > 0){
        cartSession.forEach(function(itema){
        if (itema.id == item){
          itema.amount = itema.amount - amount;
         }
      })
      if(!JSON.stringify(cartSession).includes(`"id":${item}`)){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
        }
      }
      sessionStorage.setItem('cart', JSON.stringify(cartSession)); 
      let userSessionStorage = sessionStorage.getItem('cart')
      this.writeUserData(this.#uid, userSessionStorage);
    }
  
    clearCart (){
      sessionStorage.setItem('cart', 'null');
      let userSessionStorage = sessionStorage.getItem('cart');
      this.writeUserData(this.#uid, userSessionStorage);
    }
  }
  
export { CartManager };
  