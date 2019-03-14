package com.luan.nogue.establishment.service;

import com.luan.nogue.establishment.model.Establishment;
import com.luan.nogue.establishment.model.EstablishmentCredentials;
import com.luan.nogue.location.repository.CityRepository;
import com.luan.nogue.establishment.repository.EstablishmentCredentialsRepository;
import com.luan.nogue.establishment.repository.EstablishmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EstablishmentService {

    @Autowired
    private EstablishmentRepository establishmentRepository;
    @Autowired
    private EstablishmentCredentialsRepository establishmentCredentialsRepository;
    @Autowired
    private CityRepository cityRepository;

    @Transactional
    public void updateEstablishment(Establishment establishment) {
        Optional<Establishment> establishmentOptional = establishmentRepository.findById(establishment.getId());

        establishment.setEstablishmentCredentials(
                establishmentOptional
                        .orElseThrow(IllegalArgumentException::new)
                        .getEstablishmentCredentials()
        );

        establishmentRepository.save(establishment);
    }

    @Transactional
    public void updateEstablishmentCredentials(EstablishmentCredentials establishmentCredentials) {
        Optional<EstablishmentCredentials> establishmentCredentialsOptional = establishmentCredentialsRepository.findById(establishmentCredentials.getId());

        establishmentCredentials.setEstablishment(
                establishmentCredentialsOptional
                        .orElseThrow(() -> new IllegalArgumentException())
                        .getEstablishment()
        );

        establishmentCredentialsRepository.save(establishmentCredentials);
    }

    @Transactional
    public void save(EstablishmentCredentials establishmentCredentials) {
        establishmentCredentials.setPassword(
                new BCryptPasswordEncoder().encode(establishmentCredentials.getPassword())
        );
        establishmentCredentialsRepository.save(establishmentCredentials);
    }

    public Establishment findByUsername(String username) {
        Optional<Establishment> optionalEstablishment = establishmentRepository.findByEstablishmentCredentialsUsername(username);

        return optionalEstablishment.orElse(null);
    }

    public void delete(Long id){
        this.establishmentRepository.deleteById(id);
    }
}
