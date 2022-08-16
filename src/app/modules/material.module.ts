import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
   exports: [MatTooltipModule, MatDividerModule, MatIconModule],
})
export class MaterialModule {}
