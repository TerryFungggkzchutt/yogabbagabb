/*******************************************************************************
 * Copyright © 2022-2023 VMware, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Batch } from '../../../../contracts/v3/appsvc/functions';

@Component({
  selector: 'app-appsvc-function-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit, OnChanges {

  @Input() batch: Batch
  @Output() batchChange = new EventEmitter<Batch>()

  constructor() {
    this.batch = {
      Parameters: {
        Mode: 'bycount',
        IsEventData: 'true'
      }
    } as Batch
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.batchChange.emit(this.batch)
  }

}
