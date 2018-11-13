package com.luan.nogue.repository;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findByState(State state);

}
