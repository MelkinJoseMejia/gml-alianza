package com.gml.alianza.service.implementation;

import com.gml.alianza.entity.Cliente;

import java.io.IOException;
import java.util.List;

public interface IClienteService {
    List<Cliente> getClientes();
    Cliente getClienteSK(String sharedkey);

    Cliente save(Cliente cliente);

    Object export() throws IOException;
}
