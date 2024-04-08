import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FamilleProduitComponent } from './pages/famille-produit/famille-produit.component';
import { FpAddEditComponent } from './pages/famille-produit/fp-add-edit/fp-add-edit.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { PAddEditComponent } from './pages/produits/p-add-edit/p-add-edit.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule, MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose} from '@angular/material/dialog';
import { FpDeleteDialogComponent } from './pages/famille-produit/fp-delete-dialog/fp-delete-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    FamilleProduitComponent,
    FpAddEditComponent,
    ProduitsComponent,
    PAddEditComponent,
    FpDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    MatToolbarModule,RouterModule, MatPaginatorModule, MatCardModule, MatTableModule,
    FlexLayoutModule, MatInputModule, MatFormFieldModule, FormsModule, MatDatepickerModule, MatNativeDateModule,
    MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,
    HttpClientModule
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
