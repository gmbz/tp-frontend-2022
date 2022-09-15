import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchPipe, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
