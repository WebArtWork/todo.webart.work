import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Спринти' } },
		loadComponent: () =>
			import('./sprints-list.component').then((m) => m.SprintsListComponent),
	},
	{
		path: ':sprintId',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Спринт' } },
		loadComponent: () =>
			import('../../../features/sprints/sprint-view/sprint-view.component').then(
				(m) => m.SprintViewComponent,
			),
	},
];
