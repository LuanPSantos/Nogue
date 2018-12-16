package com.luan.nogue.service;

import com.luan.nogue.model.entity.City;
import com.luan.nogue.model.entity.State;
import com.luan.nogue.repository.CityRepository;
import com.luan.nogue.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LocalizationService {

    @Autowired
    private StateRepository stateRepository;
    @Autowired
    private CityRepository cityRepository;

    public List<State> findAllStates() {
        return stateRepository.findAll();
    }

    public List<City> findCitiesByState(Long stateId) {
        List<City> cities = new ArrayList<>();
        cities.addAll(cityRepository.findByState(new State(stateId)));

        return cities;
    }
}
