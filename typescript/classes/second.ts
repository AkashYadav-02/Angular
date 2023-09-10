 export  class Customer {
   
  
    constructor( private firstName: string,  private lastName: string) {
      
    }
  
    
     public getfirstName(): string {
      return this.firstName;
    }
  
    
    public setfirstName(newFirstName: string) {
      this.firstName = newFirstName;
    }
  
    
    public getlastName(): string {
      return this.lastName;
    }
  
   
    public setlastName(newLastName: string) {
      this.lastName = newLastName;
    }
  }
  
  
 