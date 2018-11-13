package com.luan.nogue.service;

import com.luan.nogue.entity.*;
import com.luan.nogue.repository.CouponRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import static  org.mockito.Mockito.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CouponServiceTest {

    @MockBean
    private CouponRepository couponRepository;

    @Autowired
    private CouponService couponService;

    @Test
    @DisplayName("Should find a coupon by ID")
    public void should_find_a_coupon_by_id(){
        Coupon coupon = createCoupon();
        when(couponRepository.findById(any())).thenReturn(Optional.of(coupon));

        Coupon result = couponService.findById(1l);

        Assert.assertEquals(result, coupon);
    }

    private Coupon createCoupon(){
        Establishment establishment = new Establishment();
        establishment.setId(1l);

        Status status = new Status();
        status.setId(1l);

        Coupon coupon = new Coupon();
        coupon.setAutomaticDeactivationDate(LocalDateTime.of(2018,11,13,20,16));
        coupon.setAmount(10);
        coupon.setDepartment("Clothes");
        coupon.setEstablishment(establishment);
        coupon.setId(1l);
        coupon.setStatus(status);
        coupon.setUnlimited(false);

        return coupon;
    }
}
