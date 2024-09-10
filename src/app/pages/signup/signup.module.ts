import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SignupRoutingModule } from './signup-routing.module'
import { SignupComponent } from './signup.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatButton } from '@angular/material/button'

@NgModule({
   declarations: [SignupComponent],
   imports: [
      CommonModule,
      SignupRoutingModule,
      ReactiveFormsModule,
      MatCard,
      MatCardHeader,
      MatCardContent,
      MatFormField,
      MatInput,
      MatCardActions,
      MatButton,
      MatCardTitle,
      MatLabel,
      MatError,
   ],
})
export class SignupModule {
}
