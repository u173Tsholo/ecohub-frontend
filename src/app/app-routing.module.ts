import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//CLIENT
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
import { ClientItemComponent } from './client/client-item/client-item.component';
import { ClientServicesComponent } from './client/client-services/client-services.component';


//ADMIN 
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [

  //CLIENT 
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'client-products', component: ClientProductsComponent},
  {path: 'client-blog', component: ClientBlogComponent},
  {path: 'client-post', component: ClientPostComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'client-item', component: ClientItemComponent},
  {path: 'client-service', component: ClientServicesComponent},

  //ADMIN
  {path: 'admin-products', component: AdminProductsComponent},
  {path: 'dashboard', component: DashboardComponent},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
