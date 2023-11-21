package com.gml.alianza.controller;

import com.gml.alianza.entity.Cliente;
import com.gml.alianza.service.implementation.IClienteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    IClienteService clienteService;

    @GetMapping("/listar")
    public ResponseEntity<List<Cliente>> getClientes(){
        log.info("Inicia consumo getClientes");
        return new ResponseEntity<>(clienteService.getClientes(), HttpStatus.OK);
    }

    @GetMapping("/{sharedkey}")
    public ResponseEntity<Cliente> getClientesBySharedkey(@PathVariable("sharedkey") String sharedkey){
        log.info("Inicia consumo getClientesBySharedkey");

        Cliente cliente = clienteService.getClienteSK(sharedkey);
        log.info("Retorna consumo getClientesBySharedkey");

        if (cliente != null) {
            return new ResponseEntity<>(cliente, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/crearCliente")
    public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) {
        log.info("Inicia consumo createCliente");
        try {
            Cliente _cliente = clienteService
                    .save(cliente);
            log.info("Fin consumo createCliente");
            return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
        } catch (Exception e) {
            log.info("Excepcion consumo createCliente");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
