package com.luan.nogue.service;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.Coupon;
import com.luan.nogue.repository.CityRepository;
import com.luan.nogue.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CouponService {

    @Autowired
    private CouponRepository couponRepository;
    @Autowired
    private CityRepository cityRepository;

    public void save(Coupon coupon){
        couponRepository.save(coupon);
    }

    public Coupon findById(Long couponId){
        Optional<Coupon> couponOptional = couponRepository.findById(couponId);

        return couponOptional.orElse(null);
    }

    public List<Coupon> findByCityAndBusinessName(Long cityId, String businessName){
        Optional<City> cityOptional = cityRepository.findById(cityId);

        List<Coupon> coupons = new ArrayList<>();
        cityOptional.ifPresent((city ->
                coupons.addAll(
                        couponRepository
                                .findByCityAndBusinessName(city, businessName)
                                .orElse(new ArrayList<>()))
                )
        );

        return coupons;
    }
}
