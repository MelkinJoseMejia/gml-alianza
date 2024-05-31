import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { MatTable } from '@angular/material/table';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.css'
})
export class ListClienteComponent implements OnInit{

  datos: Cliente[] | any;
  columnas: string[] = ['sharedkey', 'nombre', 'email', 'telefono', 'fechainicio', 'editar'];

  clientes?: Cliente[];
  currentCliente: Cliente = {};
  currentIndex = -1;
  title = '';

  subscription: Subscription | undefined;

  @Input() viewMode = false;

  @Input() currentClient: Cliente = {
      nombre: '',
      telefono: '',
      email: '',
      sharedkey: '',
      fechainicio: '',
      fechafin: ''
  };

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    var temp = this.route.snapshot.params["id"];
    if(temp != null){
      this.getSharedkey(temp);
    }else{
      this.retrieveClientes();

      this.subscription = this.clienteService.refresh$.subscribe(() => {
        this.retrieveClientes();
      }

      )
    }    
  }

  getSharedkey(id: string): void {
    if(id == ''){
      Swal.fire('Error!', 'Ingrese datos para la búsqueda.', 'error');
      return;
    }
    this.clienteService.get(id)
      .subscribe({
        next: (data) => {
          this.currentClient = data;
          this.clientes = [this.currentClient];
          this.datos = this.clientes;
          console.log(this.clientes);
        },
        error: (e) => {
          Swal.fire('Error', 'No se encontraron datos.', 'error');
          console.error(e);
        }
      });
  }

  retrieveClientes(): void {
    this.clienteService.getAll()
      .subscribe({
        next: (data) => {
          this.clientes = data;
          this.datos = this.clientes;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  visible:boolean = false;
  verBusq(){
    this.visible = !this.visible
  }

}
