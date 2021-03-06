import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../data/data.interface';



@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage implements OnInit {
  contactGroup: {category: string, contacts: Contact[], icon: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.contactGroup = this.navParams.data;
  }
 

}
