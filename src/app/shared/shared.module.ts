import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoriaPipe } from './pipe/categoria.pipe';


@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        ErrorDialogComponent,
        CategoriaPipe,
        ConfirmationDialogComponent
    ],
    exports: [
        ErrorDialogComponent,
        CategoriaPipe,
        ConfirmationDialogComponent
    ]
})
export class SharedModule { }
