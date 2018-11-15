package com.luan.nogue.controller;

import com.luan.nogue.entity.Establishment;
import com.luan.nogue.entity.EstablishmentCredentials;
import com.luan.nogue.service.EstablishmentService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping(path = "{establishmentId}")
    public Establishment findById(@PathVariable("establishmentId") Long establishmentId){
        return establishmentService.findById(establishmentId);
    }
}
