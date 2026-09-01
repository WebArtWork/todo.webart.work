import { Component, computed, inject } from '@angular/core';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../features/tasks/task-short/task-short.component';
import { TasksService } from '../../features/tasks/tasks.service';

@Component({
	templateUrl: './my-tasks.component.html',
	styleUrl: './my-tasks.component.scss',
	imports: [TaskShortComponent, TranslateDirective],
})
export class MyTasksComponent {
	private readonly _tasksService = inject(TasksService);
	private readonly _userService = inject(UserService);

	readonly tasks = computed(() => this._tasksService.byAssignee(this._userService.user().name));
}
