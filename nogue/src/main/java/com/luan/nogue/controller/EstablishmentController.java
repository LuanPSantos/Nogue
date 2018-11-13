package com.luan.nogue.controller;

import com.luan.nogue.entity.Establishment;
import com.luan.nogue.service.EstablishmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "establishment")
public class EstablishmentController {

    @Autowired
    private EstablishmentService establishmentService;

    @PostMapping
    public void persist(@RequestBody Establishment establishment){
        establishmentService.save(establishment);
    }

    @PutMapping
    public void update(@RequestBody Establishment establishment){
        establishmentService.save(establishment);
    }

    @GetMapping(path = "{establishmentId}")
    public Establishment findById(@PathVariable("establishmentId") Long establishmentId){
        return establishmentService.findById(establishmentId);
    }
}
