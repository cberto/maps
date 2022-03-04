import { Component } from '@angular/core';
import { ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent  {


  names: string[] = [];
  @Input() customText: string;
  constructor(private dialogService: NbDialogService) { }

}
