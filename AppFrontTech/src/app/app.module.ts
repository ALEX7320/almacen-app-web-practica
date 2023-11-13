import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from 'pages/login/login.component';
import { HomeComponent } from 'pages/home/home.component';
import { authInterceptorProviders } from 'services/auth.interceptor';
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
import { CategoriaCardComponent } from 'pages/view/categoria/categoria-card/categoria-card.component';
import { ProveedorCardComponent } from 'pages/view/proveedor/proveedor-card/proveedor-card.component';
import { SidebarComponent } from 'pages/components/sidebar/sidebar.component';
import { DashboardComponent } from 'pages/components/dashboard/dashboard.component';
import { NavbarComponent } from 'pages/components/navbar/navbar.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        SidebarComponent,
        DashboardComponent,
        ViewCategoriaComponent,
        AddCategoriaComponent,
        ViewProductoComponent,
        AddProductoComponent,
        EditProductoComponent,
        EditCategoriaComponent,
        ViewProveedorComponent,
        AddProveedorComponent,
        EditProveedorComponent,
        ViewIngresoComponent,
        AddIngresoComponent,
        EditIngresoComponent,
        ViewSalidaComponent,
        AddSalidaComponent,
        EditSalidaComponent,
        ViewUsuarioComponent,
        AddUsuarioComponent,
        EditUsuarioComponent,
        EditUsuarioPasswordComponent,
        AlamceneroPerfilComponent,
        CategoriaCardComponent,
        ProveedorCardComponent
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        FormsModule,
        MatSnackBarModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatSelectModule,
        MatSlideToggleModule
        
    ]
})
export class AppModule { }
