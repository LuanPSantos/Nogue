package com.luan.nogue.service;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.State;
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
        Optional<State> optionalState = stateRepository.findById(stateId);

        List<City> cities = new ArrayList<>();
        optionalState.ifPresent((state) -> cities.addAll(cityRepository.findByState(state)));

        return cities;
    }
}
