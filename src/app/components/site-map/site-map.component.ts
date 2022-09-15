import { Component, Injector, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
   templateUrl: './site-map.component.html',
})
export class SiteMapComponent implements OnInit {
   public urls: string[] = [];
   constructor(private _router: Router, private injector: Injector) {}

   ngOnInit() {
      this._router.config.forEach((i) => {
         this.getPaths(i);
      });
   }

   getPaths(route: Route, parent: string = '') {
      if (route.redirectTo) {
         return;
      }
      if (route.children) {
         route.children.forEach((i) => {
            this.getPaths(i, parent + route.path);
         });
      } else if (route.loadChildren) {
         (<any>this._router).configLoader
            .load(this.injector, route)
            .subscribe((i: { routes: any[] }) => {
               i.routes.forEach((j: Route) => {
                  this.getPaths(j, parent + route.path);
               });
            });
      } else if (route.path != null) {
         this.setPath(route.path, parent);
      }
   }

   setPath(path: string | null, parent: string) {
      let fullPath: string;
      if (path != null) {
         if (parent) {
            fullPath = `/${parent}/${path}`;
         } else {
            fullPath = `/${path}`;
         }

         this.urls.push(fullPath);
      }
   }
}
