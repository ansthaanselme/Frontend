import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    constructor(private router: Router) {}

    ngOnInit() {}

    //Ouvrir la page d'inscription
    ouvrirPageInscription() {   
        this.router.navigate(['/inscription']);
      }
}
