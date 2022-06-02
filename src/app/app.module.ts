import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { JobService } from './core/services/job.service';
import { HttpErrorsInterceptor } from './core/interceptors/http-errors.interceptor';
import { HeaderComponent } from './shared/components/molecules/header/header.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { JobLoaderComponent } from './shared/components/molecules/job-loader/job-loader.component';

import { StoreModule } from '@ngrx/store';
import { jobReducer } from './core/store/job.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HeaderComponent,
    JobLoaderComponent,
  ], 


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule, 
    MatIconModule, 
    MatInputModule,
    NgxSkeletonLoaderModule,
    StoreModule.forRoot({ state: jobReducer}),

  ],
  providers: [
    JobService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    },
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

