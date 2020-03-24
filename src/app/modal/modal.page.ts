import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRelationPage } from '../modal-relation/modal-relation.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}
  
  ngOnInit() {}
  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalRelationPage
    });
    return await modal.present();
  }

}
