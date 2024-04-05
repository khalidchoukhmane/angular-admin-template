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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    DashboardComponent,
    ContentComponent,
    AnalyticsComponent,
    CommentsComponent
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
    MatToolbarModule,
    RouterModule, 
    MatPaginatorModule,
    MatCardModule,
    MatTableModule
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
