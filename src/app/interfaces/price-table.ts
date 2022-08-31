export class PriceTable {
   title?: string;
   subTitle?: string;
   basicContent?: string;
   premiumContent?: string;
   enterpriseContent?: string;
   customContent?: string;

   constructor(
      title?: string,
      subTitle?: string,
      basicContent?: string,
      premiumContent?: string,
      enterpriseContent?: string,
      customContent?: string
   ) {
      this.title = title;
      this.subTitle = subTitle;
      this.basicContent = basicContent;
      this.premiumContent = premiumContent;
      this.enterpriseContent = enterpriseContent;
      this.customContent = customContent;
   }
}
