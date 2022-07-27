export class Customer{
   public fname: string;
   public lname: string;
   public phoneNo : string;
   public gender: string;

    constructor(Fname: string, Lname:string, PhoneNo:string, Gender:string){
        this.fname = Fname;
        this.lname= Lname;
        this.phoneNo = PhoneNo;
        this.gender = Gender;
    }

}