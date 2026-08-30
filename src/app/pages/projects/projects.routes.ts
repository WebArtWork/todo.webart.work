import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./projects.component').then((m) => m.ProjectsComponent),
	},
	{
		path: '',
		loadChildren: () =>
			import('../project/project.routes').then((m) => m.routes),
	},
];
