import { EventEmitter } from 'angular2/core';
export declare class FilterTextComponent {
    changed: EventEmitter<string>;
    filter: string;
    constructor();
    clear(): void;
    filterChanged(event: any): void;
}
