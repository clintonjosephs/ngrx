import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/post.selectors';
import { deletePost } from '../state/post.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDeletePost(id: number): void {
    if (id === 0) return;
    
    if (confirm('Are you sure you want to delete this post?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }

}
