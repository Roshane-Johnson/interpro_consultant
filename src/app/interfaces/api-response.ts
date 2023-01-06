export interface ApiResponse {
   /**
    * Commonly used to check if the request to the server is successful
    */
   success: boolean;
   /**
    * The status code of response from the server
    */
   status: number;
   /**
    * The developer message sent with the response from the sever
    */
   message: string;
   /**
    * Data being returned from the server
    */
   data: any;
}
