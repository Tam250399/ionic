import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageModule } from './home/home.module';
import { ListPageModule } from './list/list.module';
import { QrCodePageModule } from './qr-code/qr-code.module';
import { TaiSanKiemKePageModule } from './tai-san-kiem-ke/tai-san-kiem-ke.module';

const routes: Routes = [

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
{
  path:'home',
  outlet: 'home',
  component: HomePageModule,
  canLoad: [AuthGuard]
},

{
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
},
{
  path:'home/qr-code',
  outlet: 'home/qr-code',
  component: QrCodePageModule
},

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path:'home/list',
    component: ListPageModule
  },
  {
    path: 'image-qrcode',
    loadChildren: () => import('./image-qrcode/image-qrcode.module').then( m => m.ImageQrcodePageModule)
  },
  {
    path: 'tai-san-kiem-ke',
    loadChildren: () => import('./tai-san-kiem-ke/tai-san-kiem-ke.module').then( m => m.TaiSanKiemKePageModule)
  },
  {
    path:'home/tai-san-kiem-ke',
    component: TaiSanKiemKePageModule
  },
  {
    path: 'kiemkelist',
    loadChildren: () => import('./kiemkelist/kiemkelist.module').then( m => m.KiemkelistPageModule)
  },
  {
    path: 'mataisanlist',
    loadChildren: () => import('./mataisanlist/mataisanlist.module').then( m => m.MataisanlistPageModule)
  },

  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },

 




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
