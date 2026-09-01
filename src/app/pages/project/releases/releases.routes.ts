import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Релізи' } },
		loadComponent: () =>
			import('./releases-list.component').then((m) => m.ReleasesListComponent),
	},
	{
		path: ':releaseId',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Реліз' } },
		loadComponent: () =>
			import('../../../features/releases/release-view/release-view.component').then(
				(m) => m.ReleaseViewComponent,
			),
	},
];
