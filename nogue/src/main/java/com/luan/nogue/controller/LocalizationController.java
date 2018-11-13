package com.luan.nogue.controller;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.State;
import com.luan.nogue.service.LocalizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("localization")
public class LocalizationController {

    @Autowired
    private LocalizationService localizationService;

    @GetMapping(path = "states")
    public List<State> findAllStates() {
        return localizationService.findAllStates();
    }

    @GetMapping(path = "states/{stateId}/cities")
    public List<City> findAllCitiesByState(@PathVariable("stateId") Long stateId) {
        return localizationService.findCitiesByState(stateId);
    }
}
