package com.gml.alianza.service.implementation;

import com.gml.alianza.entity.Cliente;
import com.gml.alianza.repository.ClienteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ClienteServiceTest {


    ClienteService clienteService;
    ClienteRepository clienteRepository;

    @BeforeEach
    void setUp() {
        clienteRepository = mock(ClienteRepository.class);
        clienteService = mock(ClienteService.class);
    }

    @Test
    void getClientes() {
        List<Cliente> lista = new ArrayList<>();
        Cliente cliente = new Cliente();
        cliente.setId(1L);
        cliente.setEmail("mail@mail.com");
        cliente.setFechafin("2023/02/12");
        cliente.setFechainicio("2023/01/12");
        cliente.setNombre("Nombre prueba");
        lista.add(cliente);
        when(clienteRepository.findBySharedkey(anyString()))
                .thenReturn(cliente);
        List<Cliente> res = clienteService.getClientes();
        assertNotNull(res);
    }

    @Test
    void getClienteSK() {
        String sk = "shshsh";
        Cliente cliente = new Cliente();
        cliente.setId(2L);
        cliente.setEmail("mail@mail.com");
        cliente.setFechafin("2023/02/12");
        cliente.setFechainicio("2023/01/12");
        cliente.setNombre("Nombre prueba");
        when(clienteRepository.findBySharedkey(anyString()))
                .thenReturn(cliente);
        Cliente res = clienteService.getClienteSK(sk);
        assertNull(res);
    }

}