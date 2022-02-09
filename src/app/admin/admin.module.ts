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
// import { ServicesPageComponent } from './services-page/services-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { NailServiceComponent } from "../nail-service/nail-service.component";
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { GetAllOrderComponent } from './get-all-order/get-all-order.component';
// import { AddOrderComponent } from "./add-order/add-order.component";


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
            // {path:'orders',component:OrdersPageComponent},
            {path:'product/:id/edit',component:EditPageComponent},
            

            {path:'ordersweek',component:OrdersweekPageComponent},
            // {path:'orders',component:OrdersPageComponent},
            {path:'orders',component:GetAllOrderComponent},
            // {path:'users',component:UsersPageComponent},
            {path:'users',component:GetAllUserComponent},
            // {path:'services',component:ServicesPageComponent},
            {path:'services',component:NailServiceComponent},
            // {path:'services',component:AddOrderComponent},
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
    //   ServicesPageComponent,
    NailServiceComponent,
      UsersPageComponent,
      GetAllUserComponent,
      GetAllOrderComponent
    ]

})
export class AdminModule{}