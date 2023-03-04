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
        let container = document.querySelector('#container');
        let product = document.createElement('div');

    }
}

export {Product};