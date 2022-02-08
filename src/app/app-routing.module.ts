import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddOrderComponent } from './shared/add-order/add-order.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: MainPageComponent },
      { path: 'addorder', component: AddOrderComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'product/:id', component: ProductPageComponent },
      
      {path:'contacts',component:ContactsComponent},
      
      {path:'services',component:NailServiceComponent},
      {path:'gallery',component:GalleryComponent},
      { path: 'cart', component: CartPageComponent },
    ],
  },
  // { path: 'admin', loadChildren: '.admin/admin.module#AdminModule' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
