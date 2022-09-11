export interface IApiResponse {
   message?: string;
   status: number;
   data: { [key: string]: any };
   success: boolean;
}
