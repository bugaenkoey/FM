import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrdersweekPageComponent } from './ordersweek-page/ordersweek-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    RouterModule.forChild([{
        path:'',component:AdminLayoutComponent,children:[
            {path:'',redirectTo:'/admin/login',pathMatch:'full'},
            {path:'login',component:LoginPageComponent},
            {path:'dashboard',component:DashboardPageComponent},
            {path:'add',component:AddPageComponent},
            {path:'orders',component:OrdersPageComponent},
            {path:'product/:id/edit',component:EditPageComponent},
            

            {path:'ordersweek',component:OrdersweekPageComponent},
            {path:'orders',component:OrdersPageComponent},
            {path:'users',component:UsersPageComponent},
            {path:'services',component:ServicesPageComponent},
        ]
    }])
    ],
    exports:[RouterModule],
    declarations: [
      AdminLayoutComponent,
      LoginPageComponent,
      AddPageComponent,
      DashboardPageComponent,
      EditPageComponent,
      OrdersPageComponent,
      OrdersweekPageComponent,
      ServicesPageComponent,
      UsersPageComponent
    ]

})
export class AdminModule{}