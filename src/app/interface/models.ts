export interface itemCart {
  id: string;
  url:string;
  name: string;
  social:number;
  option: number;
  serviceInfo:serviceInfo;
  priceInfo:priceInfo;
}

export interface serviceInfo {
  slug:string;
}

export interface priceInfo {
  id:string;
  price: number;
  bonus:number;
  quantity: number;
}

export interface checkout {
  id:string;
  url: string;
  slug:string;
}

export interface product {
  id_service: string;
  slug:string;
  prices:price[];
}

export interface price {
  id_price: string;
  quantity:number;
  bonus:number;
  price:number;
}

export interface token {
  message: string;
}


