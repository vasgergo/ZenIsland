import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MyBookingsRoutingModule } from './my-bookings-routing.module'
import { MyBookingsComponent } from './my-bookings.component'
import { MatTableModule } from '@angular/material/table'
import { MatButton } from '@angular/material/button'
import { MatOption, MatSelect } from '@angular/material/select'

@NgModule({
   declarations: [MyBookingsComponent],
   imports: [CommonModule, MyBookingsRoutingModule, MatTableModule, MatButton, MatSelect, MatOption],
})
export class MyBookingsModule {
}
