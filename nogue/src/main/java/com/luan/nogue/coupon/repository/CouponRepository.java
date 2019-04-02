package com.luan.nogue.coupon.repository;

import com.luan.nogue.coupon.model.Status;
import com.luan.nogue.location.model.City;
import com.luan.nogue.coupon.model.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {

    @Query("Select coupon from Coupon coupon " +
            "join fetch coupon.establishment establishment " +
            "join coupon.establishment.city city " +
            "where establishment.businessName like concat('%',:businessName,'%') "+
            "and city = :city " +
            "and coupon.status = :status"
    )
    Optional<List<Coupon>> findAllForCustomers(City city, String businessName, Status status);

    @Query("Select coupon from Coupon coupon " +
            "join fetch coupon.establishment establishment " +
            "where establishment.id = :establishmentId "
    )
    Optional<List<Coupon>> findAllByEstablishment(Long establishmentId);

    @Query("Select coupon from Coupon coupon " +
            "where coupon.automaticDeactivationDate <= :date"
    )
    Optional<List<Coupon>> findCouponsToDeactivation(LocalDateTime date);
}
