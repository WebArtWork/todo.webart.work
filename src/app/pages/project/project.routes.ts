import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { ProjectShellComponent } from './project-shell.component';

export const routes: Routes = [
	{
		path: ':id',
		component: ProjectShellComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Дошка проекту' } },
				loadComponent: () =>
					import('./board/board.component').then((m) => m.BoardComponent),
			},
			{
				path: 'backlog',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Бэклог' } },
				loadComponent: () =>
					import('./backlog/backlog.component').then(
						(m) => m.BacklogComponent,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Налаштування проекту' } },
				loadComponent: () =>
					import('./settings/project-settings.component').then(
						(m) => m.ProjectSettingsComponent,
					),
			},
		],
	},
];
