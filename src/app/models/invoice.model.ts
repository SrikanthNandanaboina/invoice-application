export interface Address {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt?: string | Date;
  paymentDue?: string;
  description?: string;
  paymentTerms?: number;
  clientName?: string;
  clientEmail?: string;
  status?: string;
  senderAddress?: Address;
  clientAddress?: Address;
  items?: Item[];
  total?: number;
}
