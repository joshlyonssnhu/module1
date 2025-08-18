import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new
    InjectionToken<Storage>('Browser STorage', {
        providedIn: 'root',
        factory: () => localStorage
    });

export class Storage {
}
