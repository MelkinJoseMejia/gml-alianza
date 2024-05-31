package com.gml.alianza.service.implementation;

import com.gml.alianza.entity.Cliente;
import com.gml.alianza.repository.ClienteRepository;
import com.opencsv.CSVWriter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
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

    @Override
    public Object export() throws IOException {
        List<Cliente> lista = clienteRepository.findAll();
        System.out.println("size...."+lista.size());
        String[] l = new String[lista.size()];
        for (int i=0;i<lista.size();i++){
            l[i] = lista.get(i).toAsString();
        }

        String salida = "clients.csv";

        CSVWriter fw = new CSVWriter(new FileWriter(salida, true));
        fw.writeNext(l);

        fw.flush();
        System.out.println("Data entered");

        return fw;

    }

}
