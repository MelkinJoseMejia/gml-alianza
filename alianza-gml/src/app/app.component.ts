import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente.model';
import { ClienteService } from './services/cliente.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

declare var window:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'alianza-gml';
  formModal: any;
  myGroup: FormGroup = new FormGroup({
  });
  

  cliente: Cliente = {
    nombre: '',
    telefono: '',
    email: '',
    sharedkey: '',
    fechainicio: '',
    fechafin: ''
  };
  submitted = false;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) { 
    this.myGroup = fb.group({
      telefono: ['', [CustomValidator.numeric]],
      email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  ngOnInit(): void {
      this.formModal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
  }

  openModal(){
    this.formModal.show();
  }

  close(){
    this.formModal.hide();
  }

  saveCliente(): void {
    console.log(this.cliente.fechainicio);
    
    const data = {
      nombre: this.cliente.nombre,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      sharedkey: this.cliente.sharedkey,
      fechainicio: this.cliente.fechainicio,
      fechafin: this.cliente.fechainicio
    };
    if(data.nombre == '' || data.telefono == '' || data.email == ''
    || data.sharedkey == '' || data.fechainicio == '' || data.fechafin == ''){
      Swal.fire('Error!', 'Faltan datos por diligenciar.', 'error');
      return;
    }

    this.clienteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          Swal.fire('Exito!', 'Cliente registrado.', 'success');
        },
        error: (e) => console.error(e)
      });
      this.formModal.hide();
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
