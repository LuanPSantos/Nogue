package com.luan.nogue.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
public class Establishment implements Serializable, UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToOne(mappedBy = "establishment", orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private EstablishmentCredentials establishmentCredentials;
    @Column(nullable = false)
    private String businessName;
    @Column(nullable = false, length = 14)
    private String cnpj;
    @Column(nullable = false)
    private String email;

    @ManyToOne
    @JoinColumn(nullable = false)
    private City city;

    @JsonIgnore
    @OneToMany(mappedBy = "establishment", cascade = CascadeType.REMOVE)
    private List<Coupon> coupons;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EstablishmentCredentials getEstablishmentCredentials() {
        return establishmentCredentials;
    }

    public void setEstablishmentCredentials(EstablishmentCredentials establishmentCredentials) {
        this.establishmentCredentials = establishmentCredentials;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public List<Coupon> getCoupons() {
        return coupons;
    }

    public void setCoupons(List<Coupon> coupons) {
        this.coupons = coupons;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public String getPassword() {
        return this.establishmentCredentials.getPassword();
    }

    @Override
    @JsonIgnore
    public String getUsername() {
        return this.establishmentCredentials.getUsername();
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Establishment)) return false;
        Establishment that = (Establishment) o;
        return Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
