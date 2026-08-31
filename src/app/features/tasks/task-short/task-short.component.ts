import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TagsService } from '../../tags/tags.service';
import { Task } from '../task.interface';

const PRIORITY_SEVERITY: Record<Task['priority'], 'danger' | 'warn' | 'secondary'> = {
	high: 'danger',
	medium: 'warn',
	low: 'secondary',
};

@Component({
	selector: 'app-task-short',
	templateUrl: './task-short.component.html',
	styleUrl: './task-short.component.scss',
	imports: [RouterLink, TagModule, TranslateDirective],
})
export class TaskShortComponent {
	private readonly _tagsService = inject(TagsService);

	readonly task = input.required<Task>();

	readonly tags = computed(() => this._tagsService.many(this.task().tagIds));
	readonly prioritySeverity = computed(() => PRIORITY_SEVERITY[this.task().priority]);
}
