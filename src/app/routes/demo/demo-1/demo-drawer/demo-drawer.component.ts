import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo-drawer',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './demo-drawer.component.html',
  styles: ``
})
export class DemoDrawerComponent {
  @Input() record: any = {};
  @Input() bbb: any = '0';
  @Input() onOk: any;

  cancel() {}

  ok() {
    this.onOk();
  }
}
