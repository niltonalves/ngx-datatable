import { Component } from '@angular/core';

@Component({
  selector: 'column-reorder-demo',
  template: `
    <div>
      <h3>
        Reorder Column
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/columns/column-reorder.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [reorderable]="reorderable"
        [swapColumns]="swapColumns">
      </ngx-datatable>
    </div>
  `
})
export class ColumnReorderComponent {

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  swapColumns: boolean = false;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company', sortable: false }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
