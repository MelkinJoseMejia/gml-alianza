package com.gml.alianza.service.implementation;

import com.gml.alianza.entity.Cliente;
import com.gml.alianza.repository.ClienteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ClienteService implements IClienteService{

    @Autowired
    ClienteRepository clienteRepository;

    @Override
    public List<Cliente> getClientes() {
        log.info("En el service de getClientes");
        List<Cliente> lista = new ArrayList<>();
        lista = clienteRepository.findAll();
        log.info("Fin service de getClientes");
        return lista;
    }

    @Override
    public Cliente getClienteSK(String sharedkey) {
        log.info("En el service de getClienteSK");
        return clienteRepository.findBySharedkey(sharedkey);
    }

    @Override
    public Cliente save(Cliente cliente) {
        log.info("En el service de createCliente");
        return clienteRepository.save(cliente);
    }
}
