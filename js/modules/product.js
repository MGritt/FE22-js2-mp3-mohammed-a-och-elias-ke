class Product{
    #Description;
    #Name;
    #Picture;
    #Price;
    #Inventory;
    #Container;
    
    constructor(object, container){
        this.#Container = container;
        this.#Description = object.Description;
        this.#Name = object.Name;
        this.#Picture = object.Picture;
        this.#Price = object.Price;
        this.#Inventory = object.Inventory;
    }
    addToContainer(){
        let product = document.createElement('div');
        let picture = document.createElement('img');
        let name = document.createElement('h1');
        let description = document.createElement('p');
        let price = object.Price;
        
        
    }
}

export {Product};