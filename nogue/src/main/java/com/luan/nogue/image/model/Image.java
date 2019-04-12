package com.luan.nogue.image.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Image implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullImage;
    private String smallImage;

    public Image() {
    }

    public Image(String fullImage, String smallImage) {
        this.fullImage = fullImage;
        this.smallImage = smallImage;
    }

    public Long getId() {
        return id;
    }

    public String getSmallImage() {
        return smallImage;
    }

    public String getFullImage() {
        return fullImage;
    }

}
