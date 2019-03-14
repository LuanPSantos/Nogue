package com.luan.nogue.coupon.model;

import com.luan.nogue.establishment.model.Establishment;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class Coupon implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String product;
    private String image;
    private Integer amount;
    private Boolean unlimited;
    @Column(nullable = false)
    private LocalDateTime automaticDeactivationDate;
    @Column(nullable = false)
    private Float discount;
    @Column(nullable = false)
    private Float originalPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    private Establishment establishment;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Status status;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Boolean getUnlimited() {
        return unlimited;
    }

    public void setUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
    }

    public LocalDateTime getAutomaticDeactivationDate() {
        return automaticDeactivationDate;
    }

    public void setAutomaticDeactivationDate(LocalDateTime automaticDeactivationDate) {
        this.automaticDeactivationDate = automaticDeactivationDate;
    }

    public Establishment getEstablishment() {
        return establishment;
    }

    public void setEstablishment(Establishment establishment) {
        this.establishment = establishment;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Float getDiscount() {
        return discount;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public Float getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(Float originalPrice) {
        this.originalPrice = originalPrice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Coupon)) return false;
        Coupon coupon = (Coupon) o;
        return Objects.equals(getId(), coupon.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
