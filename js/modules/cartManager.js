class CartManager {
    #ProductID
  
    constructor() {
      
    }
  
    addToCart (item , amount){
      
      let userAmount = sessionStorage.getItem(item)
  
      if(userAmount && userAmount != 'null'){
        userAmount = Number(userAmount)+amount
        //console.log(userAmount);
        sessionStorage.setItem(item , userAmount)
      }
      else { 
        sessionStorage.setItem(item , amount)
      }
    }
  
    removeFromCart (item , amount){
      let userAmount = sessionStorage.getItem(item)
      if(userAmount && userAmount != 'null'){
        userAmount = Number(userAmount)-amount
        //console.log(userAmount);
        sessionStorage.setItem(item , userAmount)
      }
      else { 
        sessionStorage.setItem(item , amount)
      }
      
    }
  
    clearCart (item){
      sessionStorage.setItem(item, 'null')
      let userAmount = sessionStorage.getItem(item)
      //console.log(userAmount)
    }
  }
  
export { CartManager };
  