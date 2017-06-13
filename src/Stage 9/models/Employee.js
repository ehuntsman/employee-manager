export default class Employee {
  // constructor
  constructor(id, name, title, phone){
    this.id = id;
    this.name = name;
    this.title = title;
    this.phone = phone;
  }
  
  // updateName
  updateName(val){
    this.name = val
  }

  // updatePhone
  updatePhone(val){
    this.phone = val
  }

   // updateTitle
   updateTitle(val){
     this.title = val
   }
}