export interface IQuote {
   _id?: string;
   fullName: string;
   email: string;
   phoneNumber: number;
   service: string | { _id: string; name: string } | any;
   company: string;
   budget: number;
   message: string;
   status: string;
}
