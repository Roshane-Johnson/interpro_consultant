export class AdminRoute {
   path?: string;
   name?: string;
   icon?: string;

   constructor(path?: string, name?: string, icon?: string) {
      this.path = path;
      this.name = name;
      this.icon = icon;
   }
}
