import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('../../features/tasks/task-view/task-view.component').then(
				(m) => m.TaskViewComponent,
			),
	},
];
