import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
   exports: [
      MatTooltipModule,
      MatDividerModule,
      MatIconModule,
      MatMenuModule,
      MatTabsModule,
      MatRippleModule,
      MatButtonModule,
      MatExpansionModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDialogModule,
   ],
})
export class MaterialModule {}
