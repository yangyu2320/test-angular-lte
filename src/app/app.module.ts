import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './user/list/list.component';
import { DetailComponent } from './user/detail/detail.component';
import { UserLevelComponent } from './user/user-level/user-level.component';
import {RouterModule, Routes} from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashbord', pathMatch: 'full'},
  {path: 'dashbord', component: DashbordComponent},
  {path: 'user', component: ListComponent},
  {path: 'user/:id', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ListComponent,
    DetailComponent,
    UserLevelComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
