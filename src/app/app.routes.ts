import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [

    {
        path: 'login',component:LoginComponent,
    },{
        path:'SignIn',component:SignupComponent,
    },
    {
        path:'Admin',component:AdminComponent,
        canActivate:[authGuard]
    }



];
