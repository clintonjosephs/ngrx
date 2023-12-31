import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared/shared-module.module';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([AuthEffects]),
        SharedModuleModule,
    ]
})
export class AuthModule { }
