//1. it is for contactform3 for function calling
export type onChangeEventType = {
    target:{
      name:  string;
      value: string;
}
  }

  //2. it is for contactform3 for variable initialization
export type contactTypes  = {
  userName: string; // changed 'name' to 'userName' to be consistent with 'contactInfoTypes'
  email: string;
  phone: 0;
  onmessage: string;
}  

//3. it is just for display contact3 for print
export interface contactInfoTypes {
  userName: string;
  email: string;
  phone: number;
  onmessage: string;
}
