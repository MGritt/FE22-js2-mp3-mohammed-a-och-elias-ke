class CartManager {
    #ProductID
  
    constructor() {
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
      console.log(userSessionStorage);
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
      console.log(userSessionStorage);
      
    }
  
    clearCart (item){
      sessionStorage.setItem(item, 'null')
      let userAmount = sessionStorage.getItem(item)
    }
  }
  
export { CartManager };
  