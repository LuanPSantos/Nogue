package com.luan.nogue.location.repository;

import com.luan.nogue.location.model.City;
import com.luan.nogue.location.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findByState(State state);

}
