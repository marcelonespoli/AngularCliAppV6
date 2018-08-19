import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// components
import { AppComponent } from './app.component';
import { UpperMenuComponent } from './shared/upper-menu/upper-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { LoginMenuComponent } from './shared/login-menu/login-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
