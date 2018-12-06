package com.luan.nogue.repository;

import com.luan.nogue.model.entity.EstablishmentCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstablishmentCredentialsRepository extends JpaRepository<EstablishmentCredentials, Long> {
}
