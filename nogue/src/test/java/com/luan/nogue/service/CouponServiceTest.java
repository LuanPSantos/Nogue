package com.luan.nogue.service;

import com.luan.nogue.model.entity.City;
import com.luan.nogue.model.entity.Coupon;
import com.luan.nogue.repository.CouponRepository;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.luan.nogue.creator.ObjectsCreator.createCoupon;
import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CouponServiceTest {

    @MockBean
    private CouponRepository couponRepository;

    @Autowired
    private CouponService couponService;

    @Test
    @DisplayName("Should find coupons by City and Business Name")
    public void should_find_coupons_by_city_and_business_name() {
        List<Coupon> coupons = Arrays.asList(
                createCoupon(),
                createCoupon()
        );
        when(couponRepository.findAllForCustomers(any(), any(), any())).thenReturn(Optional.of(coupons));

        List<Coupon> result = couponService.findAllForCustomers(11L, "Business Name");

        assertEquals(2, result.size());
        result.forEach((coupon -> assertCoupon(createCoupon(), coupon)));
    }

    @Test
    @DisplayName("Should not find coupons by City and Business Name")
    public void should_not_find_coupons_by_city_and_business_name() {
        when(couponRepository.findAllForCustomers(any(), any(), any())).thenReturn(Optional.empty());

        List<Coupon> result = couponService.findAllForCustomers(1l, "Business Name");

        assertEquals(0, result.size());
    }

    @Test(expected = InvalidDataAccessApiUsageException.class)
    @DisplayName("Should not find coupons with no city as param")
    public void should_not_find_coupons_with_no_city_as_param() {
        when(couponRepository.findAllForCustomers(eq(new City()), any(), any()))
                .thenThrow(new InvalidDataAccessApiUsageException(""));

        couponService.findAllForCustomers(null, "Business Name");
    }

    @Test
    @DisplayName("Should not find coupons with no business name as param")
    public void should_not_find_coupons_with_no_business_name_as_param() {
        when(couponRepository.findAllForCustomers(any(), eq(null), any())).thenReturn(Optional.empty());

        List<Coupon> result = couponService.findAllForCustomers(1l, null);

        assertEquals(0, result.size());
    }

    @Test
    @DisplayName("Should save a coupon")
    public void should_save_a_coupon() {
        Coupon coupon = createCoupon();
        when(couponRepository.save(coupon)).thenReturn(coupon);

        couponService.save(coupon);

        assertTrue(true);
    }

    private void assertCoupon(Coupon c1, Coupon c2) {
        assertEquals(c1.getId(), c2.getId());
        assertEquals(c1.getAmount(), c2.getAmount());
        assertEquals(c1.getAutomaticDeactivationDate(), c2.getAutomaticDeactivationDate());
        assertEquals(c1.getDepartment(), c2.getDepartment());
        assertNotNull(c1.getEstablishment());
        assertEquals(c1.getStatus(), c2.getStatus());
        assertEquals(c1.getUnlimited(), c2.getUnlimited());
    }
}
