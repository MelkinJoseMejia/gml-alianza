import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrl: './add-cliente.component.css'
})
export class AddClienteComponent implements OnInit{

  cliente: Cliente = {
    nombre: '',
    telefono: '',
    email: '',
    sharedkey: '',
    fechainicio: '',
    fechafin: ''
  };
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      nombre: this.cliente.nombre,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      sharedkey: this.cliente.sharedkey,
      fechainicio: this.cliente.fechainicio,
      fechafin: this.cliente.fechainicio
    };

    this.clienteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nombre: '',
      telefono: '',
      email: '',
      sharedkey: '',
      fechainicio: '',
      fechafin: ''
    };
  }

}
