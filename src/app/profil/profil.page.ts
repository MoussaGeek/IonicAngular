import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../Nosservices/services.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  private userId: any;
  private nom: any;
  private prenom: any;
  private telephone: any;
  private email: any;
  private age: any;

  constructor(
    private authService: ServicesService,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private navCrl: NavController 
  ) {

    this.auth.authState.subscribe(
      (res)=>{
        this.userId = res.uid;
        this.db.list('Users/'+this.userId).valueChanges().subscribe(data =>{
          this.nom = data[3]
          this.prenom = data[5]
          this.telephone = data[6]
          this.email = data[2]
          this.age = data[0]
          console.log(data);

        })
      }
    )
   }

  ngOnInit() {
  }

}
