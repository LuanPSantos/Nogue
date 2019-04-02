package com.luan.nogue.location.controller;

import com.luan.nogue.location.model.City;
import com.luan.nogue.location.model.State;
import com.luan.nogue.location.serivce.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping(path = "states")
    public List<State> findAllStates() {
        return locationService.findAllStates();
    }

    @GetMapping(path = "states/{stateId}/cities")
    public List<City> findAllCitiesByState(@PathVariable("stateId") Long stateId) {
        return locationService.findCitiesByState(stateId);
    }
}
