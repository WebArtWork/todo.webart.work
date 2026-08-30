import { Injectable, computed, signal } from '@angular/core';
import tagsData from '../../../data/tags/tags.json';
import { Tag } from './tag.interface';

@Injectable({ providedIn: 'root' })
export class TagsService {
	readonly tags = signal<Tag[]>(tagsData as Tag[]);

	readonly byId = computed(() => {
		const map = new Map<string, Tag>();
		for (const tag of this.tags()) map.set(tag._id, tag);
		return map;
	});

	get(id: string): Tag | undefined {
		return this.byId().get(id);
	}

	many(ids: string[]): Tag[] {
		const map = this.byId();
		return ids.map((id) => map.get(id)).filter((tag): tag is Tag => !!tag);
	}
}
