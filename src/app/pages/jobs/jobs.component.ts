import { Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';

interface JobPlaceholder {
	title: string;
	budget: string;
	description: string;
	tags: string[];
}

@Component({
	templateUrl: './jobs.component.html',
	styleUrl: './jobs.component.scss',
	imports: [CardModule, TagModule, TranslateDirective],
})
export class JobsComponent {
	readonly jobs: JobPlaceholder[] = [];
}
