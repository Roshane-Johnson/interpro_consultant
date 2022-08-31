export class DevService {
   title?: string;
   subTitle?: string;
   content?: string;

   constructor(title?: string, subTitle?: string, content?: any) {
      this.title = title;
      this.subTitle = subTitle;
      this.content = content;
   }
}
