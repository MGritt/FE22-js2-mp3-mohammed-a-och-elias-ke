class Product {
  #Description;
  #Name;
  #Picture;
  #Price;
  #Inventory;
  #Container;

  constructor(object, container) {

    this.#Container = container;
    this.#Description = object.Description;
    this.#Name = object.Name;
    this.#Picture = object.Picture;
    this.#Price = object.Price;
    this.#Inventory = object.Inventory;
    this.addToContainer();
    this.addToCard(0 ,100);
    this.removeToCard(0,10)
    this.clearToCard(0,)
  }
  addToContainer() {
    let product = document.createElement("div");
    let picture = document.createElement("img");
    let name = document.createElement("h1");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let inventory = document.createElement("p");

    picture.src = this.#Picture;
    name.innerText = this.#Name;
    description.innerText = this.#Description;
    price.innerText= `${this.#Price}kr`;
    inventory.innerText=`${this.#Inventory}st`
    console.log(this.#Inventory);
    
    let container = document.getElementById('container');
    
    this.#Container.append(product);
    product.append(picture);
    product.appendChild(name);
    product.appendChild(description);
    product.appendChild(price);
    product.appendChild(inventory);


  }

  addToCard (item , amount){
    
    let userAmount = sessionStorage.getItem(item)

    if(userAmount && userAmount != 'null'){
      userAmount = Number(userAmount)+amount
      console.log(userAmount);
      sessionStorage.setItem(item , userAmount)
    }
    else { 
      sessionStorage.setItem(item , amount)
    }
  }

  removeToCard (item , amount){

    let userAmount = sessionStorage.getItem(item)
    if(userAmount && userAmount != 'null'){
      userAmount = Number(userAmount)-amount
      console.log(userAmount);
      sessionStorage.setItem(item , userAmount)
    }
    else { 
      sessionStorage.setItem(item , amount)
    }
    
  }

  clearToCard (item){
    sessionStorage.setItem(item, 'null')
    let userAmount = sessionStorage.getItem(item)
    console.log(userAmount)
  }


}

export { Product };
