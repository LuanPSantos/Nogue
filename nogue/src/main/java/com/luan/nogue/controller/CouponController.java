package com.luan.nogue.controller;

import com.luan.nogue.entity.Coupon;
import com.luan.nogue.service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("coupon")
public class CouponController {

    @Autowired
    private CouponService couponService;

    @PostMapping
    public void persit(@RequestBody Coupon coupon){
        couponService.save(coupon);
    }

    @PutMapping
    public void update(@RequestBody Coupon coupon){
        couponService.save(coupon);
    }

    @GetMapping(path = "{couponId}")
    public Coupon findById(@PathVariable("couponId") Long couponId){
        return couponService.findById(couponId);
    }

    @GetMapping
    public List<Coupon> findByCityAndBusinessName(@RequestParam("cityId") Long cityId, @RequestParam("businessName") String businessName){
        return couponService.findByCityAndBusinessName(cityId, businessName);
    }
}
