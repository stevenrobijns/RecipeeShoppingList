import { OnInit } from 'angular2/core';
import { ModalService } from './modal.service';
export declare class ModalComponent implements OnInit {
    private _defaults;
    title: string;
    message: string;
    okText: string;
    cancelText: string;
    negativeOnClick: (e: any) => void;
    positiveOnClick: (e: any) => void;
    private _modalElement;
    private _cancelButton;
    private _okButton;
    constructor(modalService: ModalService);
    activate(message?: string, title?: string): Promise<boolean>;
    ngOnInit(): void;
    private _show();
    private _hideDialog();
}
