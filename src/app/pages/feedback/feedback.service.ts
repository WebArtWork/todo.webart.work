import { Injectable, inject } from '@angular/core';
import { HttpService } from '@wawjs/ngx-http';
import { Observable, from, switchMap } from 'rxjs';
import { FeedbackSubmission } from './feedback.interface';

/**
 * Feedback is collected centrally on it.webart.work regardless of which
 * startup's own backend (or lack of one) `environment.url` points to.
 */
const FEEDBACK_API_URL = 'https://it.webart.work';
const FEEDBACK_DOMAIN = 'todo.webart.work';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
	private readonly _httpService = inject(HttpService);

	submit(payload: FeedbackSubmission): Observable<unknown> {
		return this._httpService.post(
			'/api/companydevelopmentfeedback/create',
			{ ...payload, domain: FEEDBACK_DOMAIN },
			undefined,
			{ url: FEEDBACK_API_URL },
		);
	}

	uploadFile(file: File): Observable<{ url: string }> {
		return from(this._readAsDataUrl(file)).pipe(
			switchMap((dataUrl) =>
				this._httpService.post(
					'/api/companydevelopmentfeedback/upload',
					{ dataUrl, mime: file.type, name: file.name },
					undefined,
					{ url: FEEDBACK_API_URL },
				),
			),
		);
	}

	private _readAsDataUrl(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = () => reject(reader.error);
			reader.readAsDataURL(file);
		});
	}
}
