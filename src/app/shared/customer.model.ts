export class Customer{
   public fname: string;
   public lname: string;
   public phoneNo : string;
   public age: string;

    constructor(fname: string, lname:string, phoneNo:string, age:string){
        this.fname = fname;
        this.lname= lname;
        this.phoneNo = phoneNo;
        this.age = age;
    }

}