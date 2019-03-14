package com.luan.nogue.coupon.service;

import com.luan.nogue.coupon.model.Status;
import com.luan.nogue.location.model.City;
import com.luan.nogue.coupon.model.Coupon;
import com.luan.nogue.location.repository.CityRepository;
import com.luan.nogue.coupon.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public void save(Coupon coupon) {
        couponRepository.save(coupon);
    }

    public List<Coupon> findAllForCustomers(Long cityId, String businessName) {
        List<Coupon> coupons = new ArrayList<>();
        coupons.addAll(
                couponRepository
                        .findAllForCustomers(new City(cityId), businessName, Status.ACTIVE)
                        .orElse(new ArrayList<>()));


        return coupons;
    }

    public List<Coupon> findAllByEstablishment(String username) {
        List<Coupon> coupons = new ArrayList<>();
        coupons.addAll(
                couponRepository
                        .findAllByEstablishment(username)
                        .orElse(new ArrayList<>()));

        return coupons;
    }

    public void delete(Long id){
        couponRepository.deleteById(id);
    }

    //0 0 * * * * - cada hora
    @Scheduled(cron = "0 * * * * *")
    @Transactional
    public void deactivsateCoupons() {

        Optional<List<Coupon>> couponsOptional = couponRepository.findCouponsToDeactivation(LocalDateTime.now());

        couponsOptional.ifPresent(coupons ->
                coupons.forEach(coupon -> coupon.setStatus(Status.INACTIVE))
        );
    }
}
