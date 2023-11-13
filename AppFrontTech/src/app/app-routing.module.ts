import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'pages/home/home.component';
import { LoginComponent } from 'pages/login/login.component';
import { ProfileComponent } from 'pages/profile/profile.component';
import { ViewCategoriaComponent } from 'pages/view/categoria/view-categoria/view-categoria.component';
import { AddCategoriaComponent } from 'pages/view/categoria/add-categoria/add-categoria.component';
import { ViewProductoComponent } from 'pages/view/producto/view-producto/view-producto.component';
import { AddProductoComponent } from 'pages/view/producto/add-producto/add-producto.component';
import { EditProductoComponent } from 'pages/view/producto/edit-producto/edit-producto.component';
import { EditCategoriaComponent } from 'pages/view/categoria/edit-categoria/edit-categoria.component';
import { ViewProveedorComponent } from 'pages/view/proveedor/view-proveedor/view-proveedor.component';
import { AddProveedorComponent } from 'pages/view/proveedor/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from 'pages/view/proveedor/edit-proveedor/edit-proveedor.component';
import { ViewIngresoComponent } from 'pages/view/ingreso/view-ingreso/view-ingreso.component';
import { AddIngresoComponent } from 'pages/view/ingreso/add-ingreso/add-ingreso.component';
import { EditIngresoComponent } from 'pages/view/ingreso/edit-ingreso/edit-ingreso.component';
import { ViewSalidaComponent } from 'pages/view/salida/view-salida/view-salida.component';
import { AddSalidaComponent } from 'pages/view/salida/add-salida/add-salida.component';
import { EditSalidaComponent } from 'pages/view/salida/edit-salida/edit-salida.component';
import { ViewUsuarioComponent } from 'pages/view/usuario/view-usuario/view-usuario.component';
import { AddUsuarioComponent } from 'pages/view/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from 'pages/view/usuario/edit-usuario/edit-usuario.component';
import { EditUsuarioPasswordComponent } from 'pages/view/usuario/edit-usuario-password/edit-usuario-password.component';
import { AlamceneroPerfilComponent } from 'pages/almacenero/alamcenero-perfil/alamcenero-perfil.component';
import { HomeGuard } from 'services/guard/home.guard';
import { AdminGuard } from 'services/guard/admin.guard';
import { LoginGuard } from 'services/guard/login.guard';
import { DashboardComponent } from 'pages/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[HomeGuard],
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuard],
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AdminGuard],

    pathMatch: 'full',
  },
  {
    path: 'app',
    component: DashboardComponent,
    //pathMatch: 'full',
    canActivate:[AdminGuard],
    children:[
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"categoria",
        component:ViewCategoriaComponent
      },
      {
        path:"add-categoria",
        component:AddCategoriaComponent
      },
      {
        path:"categoria/:categoria_id",
        component:EditCategoriaComponent
      },
      {
        path:"producto",
        component:ViewProductoComponent
      },
      {
        path:"add-producto",
        component:AddProductoComponent
      },
      {
        path:"producto/:producto_id",
        component:EditProductoComponent
      },
      {
        path:"proveedor",
        component:ViewProveedorComponent
      },
      {
        path:"add-proveedor",
        component:AddProveedorComponent
      },
      {
        path:"proveedor/:proveedor_id",
        component:EditProveedorComponent
      },
      {
        path:"ingreso/producto/:producto_id",
        component:ViewIngresoComponent
      },
      {
        path:"ingreso/producto/:producto_id/add-ingreso",
        component:AddIngresoComponent
      },
      {
        path:"ingreso/:ingreso_id/producto/:producto_id",
        component:EditIngresoComponent
      },
      {
        path:"salida/producto/:producto_id",
        component:ViewSalidaComponent
      },
      {
        path:"salida/producto/:producto_id/add-salida",
        component:AddSalidaComponent
      },
      {
        path:"salida/:salida_id/producto/:producto_id",
        component:EditSalidaComponent
      },
      {
        path:"usuario",
        component:ViewUsuarioComponent
      },
      {
        path:"add-usuario",
        component:AddUsuarioComponent
      },
      {
        path:"usuario/:usuarioId",
        component:EditUsuarioComponent
      },
      {
        path:"usuario/:usuarioId/password",
        component:EditUsuarioPasswordComponent
      },
      {
        path:"pefil",
        component:AlamceneroPerfilComponent
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
