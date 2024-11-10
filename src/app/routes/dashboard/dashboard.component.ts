import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderModule } from '@delon/abc/page-header';
import { SharedModule } from '@shared';
import { ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent } from 'my-lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PageHeaderModule, SharedModule, ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent]
})
export class DashboardComponent {}
