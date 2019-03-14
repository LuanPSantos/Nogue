package com.luan.nogue.establishment.repository;

import com.luan.nogue.establishment.model.EstablishmentCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstablishmentCredentialsRepository extends JpaRepository<EstablishmentCredentials, Long> {
}
