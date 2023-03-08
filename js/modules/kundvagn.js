import {CartManager} from './cartManager.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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
    #TotaltPris;
    constructor(uid) {
        super(uid);
        this.#TotaltPris = 0;
        //this.addToContainer();
        //this.getCart();
      }

      addToContainer(container, object, amount){
        let self = this;
        const img = document.createElement('img');
        img.src = object.Picture;
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = object.Name;
        const p2 = document.createElement('p');
        p2.innerText = amount+'st';
        const removeBtn = document.createElement('button');
        removeBtn.innerText = '-';
        removeBtn.addEventListener('click', function(){
          self.removeFromCart(object.id, 1);
          return self.loadCart(container);
        })
        const addBtn = document.createElement('button');
        addBtn.innerText = '+';
        addBtn.addEventListener('click', function(){
          self.addToCart(object.id, 1);
          return self.loadCart(container);
        })
        container.append(li);
        li.append(img, p1, p2, removeBtn, addBtn)
      }

      success(container){
        container.innerHTML = '';
        const k = document.querySelector('.k');
        if(k){
          k.remove();
        }
        const h1 = document.createElement('h1');
        h1.innerText = 'tack för ditt köp!';
        container.append(h1);
      }

      async loadCart(container){
        let self = this;
        container.innerHTML = '';
        const k = document.querySelector('.k');
        if(k){
          k.remove();
        }
        const homeBtn = document.querySelector('#homeBtn');
        homeBtn.addEventListener('click', function(){
          location.reload();
        })
        const footer = document.querySelector('footer');
        const div = document.createElement('div');
        div.classList.add('k');
        const h1 = document.createElement('h1');
        h1.classList.add('h1h1');
        h1.innerText = 'Kundvagn';
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'produkter');
        const p = document.createElement('p');
        p.innerText = 'Totalt pris: ';
        const span = document.createElement('span');
        span.setAttribute('id', 'totaltPris');
        const buyBtn = document.createElement('button');
        buyBtn.setAttribute('id', 'buyButton');
        buyBtn.innerText = 'Genomför köp';
        buyBtn.addEventListener('click', function(){
          self.purchase();
          self.clearCart();
          return self.success(container);
        })
        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('id', 'clearCart');
        clearBtn.innerText = 'Töm kundvagnen';
        clearBtn.addEventListener('click', function(){
          self.clearCart();
          return self.loadCart(container);
        })
        document.body.insertBefore(div, footer);
        div.append(h1, ul, p, span, buyBtn, clearBtn)              
        this.#Cart = this.getCart();
        let x = 0;
        this.#TotaltPris = 0;
        if(this.#Cart != null){
          this.#Cart.forEach(async function(item){
            x++;
            let obj = await self.getProduct(item.id);
            self.addToContainer(ul, obj, item.amount)
            self.#TotaltPris = self.#TotaltPris + (obj.Price*item.amount);
            if(self.#Cart.length == x){
              span.innerText = `${self.#TotaltPris}kr`
            }
          })
        }
      }

      getCart(){
        return JSON.parse(sessionStorage.getItem('cart'));
      }
}

export { Kundvagn };