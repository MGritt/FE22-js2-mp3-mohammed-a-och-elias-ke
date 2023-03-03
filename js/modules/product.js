class Product{
    #Description;
    #Name;
    #Picture;
    #Price;
    #Inventory;
    
    constructor(object){
        console.log(object);
        //let {this.#Description} = object;
        //console.log (this.#Description);
        let {Description} = object;
        console.log(Description);
        this.#Description = object.Description;
        console.log(this.#Description);

        //{this.#Description, this.#Name, this.#Picture, this.#Price, this.#Inventory} = object;
    }
}

export {Product};