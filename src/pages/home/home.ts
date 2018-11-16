import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private mc:ModalController)
  {

  }

  tembak()
  {
      alert("Hello WORLD!");
  }

  goFirst()
  {
      this.navCtrl.setRoot('FirstPage')
  }

  pushFirst()
  {
    this.navCtrl.push('FirstPage');
  }

  createModal()
  {
    let abc=this.mc.create('FirstPage');
    abc.present();

  }





}
