package com.luan.nogue.service;

import com.luan.nogue.constant.Status;
import com.luan.nogue.entity.City;
import com.luan.nogue.entity.Coupon;
import com.luan.nogue.repository.CityRepository;
import com.luan.nogue.repository.CouponRepository;
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

    public void save(Coupon coupon) {
        couponRepository.save(coupon);
    }

    public Coupon findById(Long couponId) {
        Optional<Coupon> couponOptional = couponRepository.findById(couponId);

        return couponOptional.orElse(null);
    }

    public List<Coupon> findAllForCustomers(Long cityId, String businessName) {
        List<Coupon> coupons = new ArrayList<>();
        coupons.addAll(
                couponRepository
                        .findAllForCustomers(new City(cityId), businessName, Status.ACTIVE)
                        .orElse(new ArrayList<>()));


        return coupons;
    }

    public List<Coupon> findAllByEstablishmentUsernameAndStatus(String username) {
        List<Coupon> coupons = new ArrayList<>();
        coupons.addAll(
                couponRepository
                        .findAllByEstablishmentUsername(username)
                        .orElse(new ArrayList<>()));

        return coupons;
    }

    public void delete(Long id){
        couponRepository.deleteById(id);
    }

    @Scheduled(cron = "0 0 * * * *")
    @Transactional
    public void desactiveCoupons() {

        Optional<List<Coupon>> couponsOptional = couponRepository.findCouponsToDeactivation(LocalDateTime.now());

        couponsOptional.ifPresent(coupons ->
                coupons.forEach(coupon -> coupon.setStatus(Status.INACTIVE))
        );
    }
}
