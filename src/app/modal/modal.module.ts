import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPage } from "./modal.page";
import { ModalRelationPageModule } from "../modal-relation/modal-relation.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ModalRelationPageModule],
  declarations: [ModalPage],
  entryComponents: [
    ModalPage
  ]
})
export class ModalPageModule {}
