import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { EditUserProfileComponent } from './Components/edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
  {
    path: 'edit',
    component: EditUserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent, EditUserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModuleModule {}
