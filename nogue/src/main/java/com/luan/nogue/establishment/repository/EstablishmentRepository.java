package com.luan.nogue.establishment.repository;

import com.luan.nogue.establishment.model.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {

    Optional<Establishment> findByEstablishmentCredentialsUsername(String username);
}
