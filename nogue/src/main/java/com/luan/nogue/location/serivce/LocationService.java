package com.luan.nogue.location.serivce;

import com.luan.nogue.location.model.City;
import com.luan.nogue.location.model.State;
import com.luan.nogue.location.repository.CityRepository;
import com.luan.nogue.location.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {

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
