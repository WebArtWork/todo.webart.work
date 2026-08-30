import { Component, inject } from '@angular/core';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TagsService } from '../../features/tags/tags.service';

@Component({
	templateUrl: './tags.component.html',
	styleUrl: './tags.component.scss',
	imports: [TableModule, TagModule, TranslateDirective],
})
export class TagsComponent {
	readonly tagsService = inject(TagsService);
}
