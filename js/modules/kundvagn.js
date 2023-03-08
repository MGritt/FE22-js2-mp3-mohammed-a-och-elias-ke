import {CartManager} from './cartManager.js';

class Kundvagn extends CartManager{
    #Cart;
    constructor() {
        super();
        //this.addToContainer();
        //this.getCart();
      }

      addToContainer(container, objects){

      }

      loadCart(container){
        this.#Cart = this.getCart();
        console.log(this.#Cart);
        let test = JSON.stringify(this.#Cart);
        this.#Cart.forEach(function(item){
            console.log(item);
            //load item.id data from 
        })
        //this.addToContainer(container, this.#Cart);
      }

      getCart(){
        return JSON.parse(sessionStorage.getItem('cart'));
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