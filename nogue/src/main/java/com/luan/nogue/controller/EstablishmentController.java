package com.luan.nogue.controller;

import com.luan.nogue.model.entity.Establishment;
import com.luan.nogue.model.entity.EstablishmentCredentials;
import com.luan.nogue.service.EstablishmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "establishment")
public class EstablishmentController {

    @Autowired
    private EstablishmentService establishmentService;

    @PostMapping
    public void save(@RequestBody EstablishmentCredentials establishmentCredentials){
        establishmentService.save(establishmentCredentials);
    }

    @PutMapping
    public void updateEstablishment(@RequestBody Establishment establishment){
        establishmentService.updateEstablishment(establishment);
    }

    @PutMapping(path = "credentials")
    public void updateEstablishmentCredentials(@RequestBody EstablishmentCredentials establishmentCredentials){
        establishmentService.updateEstablishmentCredentials(establishmentCredentials);
    }

    @GetMapping() //Não passo nenhum parametro, pois a identificacao do establishment vem do token que é
    //interceptado pelos filtros e adicionado ao contexto de segurança do spring
    public Establishment findByUsername(Authentication authentication){
        String username = (String) authentication.getPrincipal();
        return establishmentService.findByUsername(username);
    }

    @DeleteMapping(path = "{id}")
    public void delete(@PathVariable("id") Long id){
        this.establishmentService.delete(id);
    }
}
