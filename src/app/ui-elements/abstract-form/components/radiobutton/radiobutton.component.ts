import {Component, HostBinding, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';

@Component({
  selector: 'app-radiobutton',
  template: `
    <div [formGroup]="group" class="form-group-container" [ngStyle]="{'justify-content': field.alignment}">
      <label class="radio-label-padding">{{field.label}}:</label>
      <mat-radio-group [formControlName]="field.name">
        <mat-radio-button class="radio-button" *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
      </mat-radio-group>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
    }

    .radio-label-padding {
      padding-right: 1em;
    }
    .radio-button:not(:last-child) {
      padding-right: 1em;
    }
    .form-group-container {
      width: 100%;
      display: flex;
    }
  `]
})
export class RadiobuttonComponent implements OnInit {
  @HostBinding('style.width') hostWidth: string;
  @HostBinding('style.grid-column-end') hostSpan: string;
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.field.width = this.field.width || '100%';
    this.hostWidth = this.field.rowWidth || '100%';
    this.hostSpan = `span ${this.field.columnSpan || 1}`;
  }
}
