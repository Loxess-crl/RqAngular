import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ReqResponse } from '../../models/req.response';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public users: User[] = []

  constructor( private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    
    this.usuariosService.getUsers()
    .subscribe((users) =>{

      this.users = users;
    });

  }

}
