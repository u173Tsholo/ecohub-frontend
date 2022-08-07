import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientNavComponent } from './client/shared/client-nav/client-nav.component';
import { HomeComponent } from './client/home/home.component';
import { AboutUsComponent } from './client/about-us/about-us.component';
import { ClientProductsComponent } from './client/client-products/client-products.component';
import { ClientBlogComponent } from './client/client-blog/client-blog.component';
import { ClientPostComponent } from './client/client-post/client-post.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminNavComponent } from './admin/shared/admin-nav/admin-nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientItemComponent } from './client/client-item/client-item.component';
import { ClientServicesComponent } from './client/client-services/client-services.component';
import { StatsDialogComponent } from './stats-dialog/stats-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientNavComponent,
    HomeComponent,
    AboutUsComponent,
    ClientProductsComponent,
    ClientBlogComponent,
    ClientPostComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AdminProductsComponent,
    AdminNavComponent,
    FooterComponent,
    ClientItemComponent,
    ClientServicesComponent,
    StatsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
