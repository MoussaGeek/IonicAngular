import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
  ) {}

  public connecterUser(detail: any){
    console.log();
    this.afa.signInWithEmailAndPassword(detail.value.login, detail.value.password).then(
      (result) => {
        if (result){
          this.router.navigateByUrl('/acceuil');
        }
        else(error)=>{
          console.log(error);
        }
      }
    );
  }
  
}

