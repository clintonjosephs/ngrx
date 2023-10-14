import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/post.reducer';
import { POST_STATE_NAME } from './state/post.selectors';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddpostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];

@NgModule({
  declarations: [PostsListComponent, AddpostComponent, EditPostComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    ReactiveFormsModule, 
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
],
})
export class PostsModule {}
