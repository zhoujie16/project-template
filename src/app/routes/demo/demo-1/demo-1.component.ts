import { Component, EventEmitter, inject } from '@angular/core';
import { _HttpClient, DrawerHelper, ModalHelper } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DemoDrawerComponent } from './demo-drawer/demo-drawer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-demo-1',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './demo-1.component.html',
  styles: ``
})
export class Demo1Component {
  constructor(private http: _HttpClient) {}

  private drawerHelper = inject(DrawerHelper);
  private modalHelper = inject(ModalHelper);
  private msg = inject(NzMessageService);
  openDrawer(): void {
    this.drawerHelper
      .create(
        'View',
        DemoDrawerComponent,
        {
          record: { a: 1, b: '2', c: new Date(), aaa: 111 },
          onOk: () => {
            this.drawerHelper.closeAll();
          }
        },
        { size: 1000, footer: true }
      )
      .subscribe(res => {
        console.log('res', res);
        this.msg.info(res);
      });
  }

  openModal(): void {
    this.modalHelper
      .create(DemoDrawerComponent, {
        record: { a: 1, b: '2', c: new Date() }
      })
      .subscribe(res => {
        console.log('res', res);
        this.msg.info(res);
      });
  }

  testhttp() {
    console.log('testhttp');
    this.http.get('http://localhost:8080/test').subscribe((res: any) => {
      console.log('res', res);
    });
  }
}
