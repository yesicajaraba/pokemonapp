import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card'
@NgModule({

 imports:[MatButtonModule,
          MatDialogModule,
          MatFormFieldModule,          
        ],
          
 exports:[MatButtonModule,
          MatDialogModule,
          MatFormFieldModule,
          MatCardModule,
        ] 
})

export class MaterialModule{}