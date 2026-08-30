import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./my-tasks.component').then((m) => m.MyTasksComponent),
	},
];
