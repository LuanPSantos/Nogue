package com.luan.nogue.service;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.Establishment;
import com.luan.nogue.repository.CityRepository;
import com.luan.nogue.repository.EstablishmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EstablishmentService {

    @Autowired
    private EstablishmentRepository establishmentRepository;
    @Autowired
    private CityRepository cityRepository;

    @Transactional
    public void save(Establishment establishment) {
        establishmentRepository.save(establishment);
    }

    public Establishment findById(Long establishmentId) {
        Optional<Establishment> optionalEstablishment = establishmentRepository.findById(establishmentId);

        return optionalEstablishment.orElse(null);
    }
}
