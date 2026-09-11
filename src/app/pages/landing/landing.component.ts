import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	imports: [
		RouterLink,
		SpiderComponent,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-check-square',
			title: 'Мої задачі',
			description: 'Особисті задачі з дедлайнами й тегами — без зайвих полів.',
			linkLabel: 'Переглянути задачі',
			route: '/my-tasks',
		},
		{
			number: '02',
			icon: 'pi pi-clipboard',
			title: 'Проєкти',
			description: 'Беклог, спринти та релізи для команди в одному проєкті.',
			linkLabel: 'Переглянути проєкти',
			route: '/projects',
		},
		{
			number: '03',
			icon: 'pi pi-compass',
			title: 'Стрічка',
			description: 'Активні задачі з усіх проєктів команди в хронології.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
		{
			number: '04',
			icon: 'pi pi-briefcase',
			title: 'Джоби',
			description: 'Фріланс-завдання від команд, які вже працюють у ToDo.',
			linkLabel: 'Переглянути джоби',
			route: '/jobs',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/my-tasks',
			title: 'Одна людина',
			description: 'Ведіть особисті задачі без зайвої складності.',
		},
		{
			number: '02',
			route: '/projects',
			title: 'Невелика команда',
			description: 'Спринти й релізи без важкого налаштування процесу.',
		},
		{
			number: '03',
			route: '/jobs',
			title: 'Фрілансер',
			description: 'Знаходьте гіг-завдання від команд у тій самій системі.',
		},
	];
}
