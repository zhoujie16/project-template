import { Component } from '@angular/core';
import { SFCheckboxWidgetSchema, SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import { SFSegmentedWidgetSchema, SegmentedWidget } from '@delon/form/widgets/segmented';
import type { SFSliderWidgetSchema } from '@delon/form/widgets/slider';
import { SharedModule } from '@shared';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './demo-form.component.html',
  styles: ``
})
export class DemoFormComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        } as SFStringWidgetSchema
      },
      age: { type: 'number' },
      status: {
        type: 'boolean',
        title: '是否启用'
      },
      status2: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY', otherData: 1 },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select'
        } as SFSelectWidgetSchema
      },
      single: {
        type: 'boolean',
        title: '同意本协议',
        description: '《用户协议》',
        ui: {
          widget: 'checkbox'
        } as SFCascaderWidgetSchema,
        default: true
      },
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8,
          checkAll: true
        } as SFCheckboxWidgetSchema,
        default: ['Apple']
      },
      datetime: {
        type: 'string',
        format: 'date-time'
      },
      base: {
        type: 'string',
        title: 'Base',
        default: 2,
        enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
        ui: {
          widget: SegmentedWidget.KEY,
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      },
      count: {
        type: 'number',
        title: '数量',
        ui: {
          widget: 'slider'
        } as SFSliderWidgetSchema,
        default: 10
      }
    },
    required: ['name', 'age'],
    ui: {
      // 指定 `label` 和 `control` 在一行中各占栅格数
      spanLabel: 4,
      spanControl: 5
    }
  };

  submit(value: any) {
    console.log('value', value);
  }
}
