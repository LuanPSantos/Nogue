package com.luan.nogue.image.model;

import java.io.Serializable;

public class Image implements Serializable {

    private String fullImage;
    private String smallImage;

    public Image() {
    }

    public Image(String fullImage, String smallImage) {
        this.fullImage = fullImage;
        this.smallImage = smallImage;
    }

    public String getSmallImage() {
        return smallImage;
    }

    public String getFullImage() {
        return fullImage;
    }

}
