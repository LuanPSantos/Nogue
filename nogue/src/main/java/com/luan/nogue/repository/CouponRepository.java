package com.luan.nogue.repository;

import com.luan.nogue.entity.City;
import com.luan.nogue.entity.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {

    @Query("Select coupon from Coupon coupon " +
            "join coupon.establishment establishment " +
            "join coupon.establishment.city city " +
            "join coupon.status status " +
            "where establishment.businessName like concat('%',:businessName,'%') "+
            "and city = :city"
    )
    List<Coupon> findByCityAndBusinessName(City city, String businessName);
}
