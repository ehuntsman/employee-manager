export default class Employee {
  // constructor
  constructor(id, name, title, phone){
    this.name = name;
    this.id = id;
    this.title = title;
    this.phone = phone;
  }
  
  // updateName
  updateName(val){
    this.name = val;
  }

  // updatePhone
  updatePhone(val){
    this.phone = val;
  }

   // updateTitle
   updateTitle(val){
     this.title = val;
   }
}