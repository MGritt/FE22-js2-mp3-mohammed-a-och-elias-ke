import {CartManager} from './cartManager.js';

class Product extends CartManager{
  #Description;
  #Name;
  #Picture;
  #Price;
  #Inventory;
  #Container;
  //#AddtoButton
  #ProductID
  #Super

  constructor(object, container, uid) {
    super(uid);
    this.#Container = container;
    this.#ProductID = object.id;
    this.#Description = object.Description;
    this.#Name = object.Name;
    this.#Picture = object.Picture;
    this.#Price = object.Price;
    this.#Inventory = object.Inventory;
    //this.#AddtoButton = object.AddtoButton
    this.addToContainer();
    //this.addToCard(0 ,100);
    //this.removeToCard(0,10)
    //this.clearToCard(0,)
  }
  addToContainer() {
    let product = document.createElement("div");
    let picture = document.createElement("img");
    let name = document.createElement("h1");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let inventory = document.createElement("p");
    let button = document.createElement("button")
    button.classList.add(`btn${this.#ProductID}`)

    picture.src = this.#Picture;
    name.innerText = this.#Name;
    description.innerText = this.#Description;
    product.setAttribute('class', 'product')
    

    button.innerText ='lägg till varukorg'
    price.innerText= `${this.#Price} kr`;
    inventory.innerText=`${this.#Inventory} st i lager`
    //console.log(this.#Inventory);
    
    
    this.#Container.append(product);
    product.append(picture);
    product.appendChild(name);
    product.appendChild(description);
    product.appendChild(price);
    product.appendChild(inventory);
    product.appendChild(button)
    let productId = this.#ProductID;
    let self = this;
    button.addEventListener('click', function(){
      if(self.#Inventory > 0){
        self.addToCart(productId, 1);
      } else {
        button.innerText = 'Slut på lager!'
        button.style.backgroundColor = 'red';
      }
    })
  }
}

export { Product };
