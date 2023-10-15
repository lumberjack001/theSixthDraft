import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'work',
    component: PortfolioComponent,
    children:[
      {
        path: '',
        component: WorkComponent,
      },
      {
        path:  'work-details',
        component: ProjectPageComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
