import {CartManager} from './cartManager.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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
class Kundvagn extends CartManager{
    #Cart;
    #Products;
    constructor() {
        super();
        this.#Products = [];
        //this.addToContainer();
        //this.getCart();
      }

      addToContainer(container, objects){

      }

      async loadCart(container){
        this.#Cart = this.getCart();
        console.log(this.#Cart);
        let self = this;
        this.#Cart.forEach(function(item){
          let obj = self.getProduct(item.id); //returns undefined?
          console.log(obj);
          //console.log(product.Name, item.amount);
          //load item.id data from 
        })
        //funkar inte
        //let products = this.#Products;
        //console.log(products.length, this.#Cart.length)
        //this.addToContainer(container, this.#Cart);
      }

      getCart(){
        return JSON.parse(sessionStorage.getItem('cart'));
      }

       getProduct(id){
         get(child(dbRef, `Product/${id-1}/`)).then((snapshot) => {
          if (snapshot.exists()) {
            const product = snapshot.val();
            if(!this.#Products.includes(product)){
              console.log(product); //product obj funkar men i return blir undefined?
              return JSON.stringify(product); //returns undefined?
              /* funkar inte
              this.#Products.push(product);
              console.log(this.#Products.length);
              */
            }
          }
        }).catch((error) => {
          console.error(error);
          return error;
        });
      }

      addToCart(item , amount){
        super.addToCart(item , amount);
      }
    
      removeFromCart(item , amount){
        super.removeFromCart(item , amount);
      }
    
      clearCart(item , amount){
        super.clearCart(item , amount);
      }
}

export { Kundvagn };