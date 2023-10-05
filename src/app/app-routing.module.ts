import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { TeachersComponent } from './shared/components/teachers/teachers.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {path:"", component: AuthComponent, pathMatch:'full'},
  {path:"teachersDashboard", component:TeachersComponent, canActivate:[AuthGuard]},
  {path:"studentsDashboard", component:StudentsComponent, canActivate:[AuthGuard]},
  {path:"**", component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
