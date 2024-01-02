export type contactInfoType = {
contactInfo: {
    userName: string;
    email: string;
    onmessage: string;
  
  }

}

export type onChangeEventType = {
    target:{value:string}
}

export type onChangeEventType1 = {
    target:{
      name:string;
      email: string;
      onmessage: any;
      value: string;
}
  }

  export interface contactInfoTypes {
    userName: string;
    email: string;
    phone: number;
    onmessage: string;
  }
  

  
