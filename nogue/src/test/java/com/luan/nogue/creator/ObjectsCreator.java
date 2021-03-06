package com.luan.nogue.creator;

import com.luan.nogue.coupon.model.Coupon;
import com.luan.nogue.establishment.model.Establishment;
import com.luan.nogue.establishment.model.EstablishmentCredentials;
import com.luan.nogue.location.model.City;
import com.luan.nogue.coupon.model.Status;
import com.luan.nogue.location.model.State;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class ObjectsCreator {

    public static Status createStatus(){
        return Status.ACTIVE;
    }

    public static State createState(){
        State state = new State();
        state.setId(1l);
        state.setInitials("SP");
        state.setName("São Paulo");

        return state;
    }

    public static City createCity(){
        City city = new City();
        city.setId(1l);
        city.setName("Artur Nogueira");
        city.setState(createState());

        return city;
    }

    public static Establishment createEstablishment(){
        Establishment establishment = new Establishment();
        establishment.setId(1l);
        establishment.setEstablishmentCredentials(createEstablishmentCredentials());
        establishment.setEmail("email");
        establishment.setCnpj("1234567890");
        establishment.setBusinessName("Establishment");
        establishment.setCity(createCity());
        establishment.setCoupons(new ArrayList<>());

        return establishment;
    }

    public static Coupon createCoupon(){
        Coupon coupon = new Coupon();
        coupon.setId(1l);
        coupon.setUnlimited(false);
        coupon.setStatus(createStatus());
        coupon.setProduct("Department");
        coupon.setAmount(10);
        coupon.setAutomaticDeactivationDate(LocalDateTime.of(2018,11,13,22,50));
        coupon.setEstablishment(createEstablishment());
        coupon.setDiscount(10f);

        return coupon;
    }

    public static EstablishmentCredentials createEstablishmentCredentials(){
        EstablishmentCredentials establishmentCredentials = new EstablishmentCredentials();
        establishmentCredentials.setId(1l);
        establishmentCredentials.setPassword("123");
        establishmentCredentials.setUsername("user");

        return establishmentCredentials;
    }
}
