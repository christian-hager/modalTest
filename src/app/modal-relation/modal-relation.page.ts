import { Component, OnInit } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-relation',
  templateUrl: './modal-relation.page.html',
  styleUrls: ['./modal-relation.page.scss'],
})
export class ModalRelationPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}
  
  ngOnInit() {}
  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });
    return await modal.present();
  }
}
