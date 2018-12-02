package com.luan.nogue.repository;

import com.luan.nogue.constant.Status;
import com.luan.nogue.entity.City;
import com.luan.nogue.entity.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {

    @Query("Select coupon from Coupon coupon " +
            "join coupon.establishment establishment " +
            "join coupon.establishment.city city " +
            "where establishment.businessName like concat('%',:businessName,'%') "+
            "and city = :city " +
            "and coupon.status = :status"
    )
    Optional<List<Coupon>> findAllForCustomers(City city, String businessName, Status status);

    @Query("Select coupon from Coupon coupon " +
            "join coupon.establishment establishment " +
            "join establishment.establishmentCredentials credentials " +
            "where credentials.username = :username "
    )
    Optional<List<Coupon>> findAllByEstablishmentUsername(String username);

    @Query("Select coupon from Coupon coupon " +
            "where coupon.automaticDeactivationDate <= :date"
    )
    Optional<List<Coupon>> findCouponsToDeactivation(LocalDateTime date);
}
