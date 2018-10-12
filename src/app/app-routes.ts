import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { HomeComponent } from './component/home/home.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { LearnApiComponent } from './component/learn-api/learn-api.component';
import { LearnFbComponent } from './component/learn-fb/learn-fb.component';

const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'ngIf', component: NgIfComponent },
    {path:'ngFor', component:NgForComponent},
    {path:'api', component:LearnApiComponent},
    {path:'formbuilder', component:LearnFbComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { };