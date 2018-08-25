import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

// bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// shared components
import { UpperMenuComponent } from './shared/upper-menu/upper-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { LoginMenuComponent } from './shared/login-menu/login-menu.component';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

// services
import { SeoService } from './services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    LoginMenuComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    Title,
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
