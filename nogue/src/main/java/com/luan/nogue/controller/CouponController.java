package com.luan.nogue.controller;

import com.luan.nogue.constant.Status;
import com.luan.nogue.entity.Coupon;
import com.luan.nogue.service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
    public List<Coupon> findAllForCustomers(
            @RequestParam("cityId") Long cityId,
            @RequestParam(value = "businessName", required = false) String businessName){

        return couponService.findAllForCustomers(cityId, businessName);
    }

    @GetMapping(path = "all")
    public List<Coupon> findAllByEstablishmentUsernameAndStatus(
            Authentication authentication){

        String username = (String) authentication.getPrincipal();
        return couponService.findAllByEstablishmentUsernameAndStatus(username);
    }

    @DeleteMapping(path = "{id}")
    public void delete(@PathVariable("id") Long id){
        this.couponService.delete(id);
    }
}
