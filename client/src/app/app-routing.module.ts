import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MemeberDetailComponent } from './members/memeber-detail/memeber-detail.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
  {path: 'members', component: MemeberListComponent},
  {path: 'members/:id', component: MemeberDetailComponent},
  {path: 'lists', component: ListComponent},
  {path: 'messages', component: MessagesComponent},
    ]
  },

  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
