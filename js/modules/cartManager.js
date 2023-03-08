import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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

class CartManager {
    #ProductID
    #Products;
    #uid
    constructor(uid) {
      this.#Products = [];
      this.#uid = uid;
    }

    writeUserData(uid, cartSession){
      set(ref(db, 'Session/' + 'User/' + uid), {
        cart: cartSession
      });      
    }

    writeLagerData(id, productData, newInventory){
      set(ref(db, 'Product/' + id), {
        Description: productData.Description,
        Inventory: newInventory,
        Name: productData.Name,
        Price: productData.Price,
        id: productData.id
      });      
    }
  
    addToCart (item , amount){
      let cartSession = [];
      let inStorage = sessionStorage.getItem('cart');
      let jsonStorage = JSON.parse(inStorage);
      if(jsonStorage){
        cartSession.push(...jsonStorage);
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
      if (cartSession.length == 0){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
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
      if(!JSON.stringify(cartSession).includes(`"id":${item}`)){
        let add = {
          'id': item,
          'amount': amount
        };
        cartSession.push(add);
        }
      if (cartSession && cartSession.length > 0){
        for(let i = 0; cartSession.length > i; i++){
          if(cartSession[i].amount == 0){
            cartSession.splice(i, 1);
          } else if (cartSession[i].id == item){
            cartSession[i].amount = cartSession[i].amount - amount;
            if(cartSession[i].amount == 0){
              cartSession.splice(i, 1);
            }
           }
        }
      }
      sessionStorage.setItem('cart', JSON.stringify(cartSession)); 
      let userSessionStorage = sessionStorage.getItem('cart')
      this.writeUserData(this.#uid, userSessionStorage);
    }
  
    purchase(){
      let self = this;
      let userSessionStorage = sessionStorage.getItem('cart');
      userSessionStorage = JSON.parse(userSessionStorage);
      if(userSessionStorage != null){
        userSessionStorage.forEach(async function(product){
          let productData = await self.getProduct(product.id)
          console.log(productData)
          let newInventory = productData.Inventory - product.amount;
          if(product.amount > productData.Inventory){
            let buyBtn = document.querySelector('#buyButton');
            buyBtn.innerText = 'Begärd antal finns ej i lager';
            buyBtn.style.backgroundColor = 'red';
          } else {
            console.log(newInventory);
            self.writeLagerData(product.id, productData, newInventory);
          }
        });
      }
    }

    clearCart (){
      sessionStorage.setItem('cart', 'null');
      let userSessionStorage = sessionStorage.getItem('cart');
      this.writeUserData(this.#uid, userSessionStorage);
    }

    async getProduct(id) {
      try {
        const snapshot = await get(child(dbRef, `Product/${id-1}/`));
        if (snapshot.exists()) {
          const product = snapshot.val();
          if (!this.#Products.includes(product)) {
            return product;
          }
        }
      } catch (error) {
        return error;
      }
    }
  }
  
export { CartManager };
  