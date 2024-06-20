import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    declarations:[],
    imports:[CommonModule,
        MatTableModule,
        MatIconModule
    ],
    exports:[MatTableModule]
})
export class SharedModule{}