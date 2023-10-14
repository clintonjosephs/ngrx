import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [
        { path: 'add', component: AddpostComponent },
        { path: 'edit/:id', component: EditPostComponent }
    ], 
  },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
