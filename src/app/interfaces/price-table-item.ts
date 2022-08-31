export class PriceTableItem {
   plan?: string;
   color?: string;
   url?: string;
   callToAction?: string;
   subscription?: { price: number; period: string };
   features?: { title: string; isActive: boolean }[];

   constructor(
      plan?: string,
      color?: string,
      url?: string,
      callToAction?: string,
      subscription?: { price: number; period: string },
      features?: { title: string; isActive: boolean }[]
   ) {
      this.plan = plan;
      this.color = color;
      this.url = url;
      this.callToAction = callToAction;
      this.subscription = subscription;
      this.features = features;
   }
}
