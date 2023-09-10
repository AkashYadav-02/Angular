class Person {
   
  
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
  
  
  const person = new Person("Akash ", "Yadav");
  
 
  console.log(`First Name: ${person.getfirstName}`);
  console.log(`Last Name: ${person.getlastName}`);
 
 
  person.setfirstName("Yash");
  person.setlastName("Shinde");
  
  
  console.log(`Updated First Name: ${person.getfirstName}`);
  console.log(`Updated Last Name: ${person.getlastName}`);
  