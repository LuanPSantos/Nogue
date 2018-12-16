package com.luan.nogue.service;

import com.luan.nogue.model.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileService {

    @Value("${image.directory}")
    private String imageDirectory;
    @Value("${image.path}")
    private String imagePath;
    @Value("${base.url}")
    private String baseUrl;

    public Image saveImage(MultipartFile image) {
        String imageName = UUID.randomUUID().toString();

        imageName += image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("."));

        try (BufferedOutputStream stream =
                     new BufferedOutputStream(new FileOutputStream(new File(imageDirectory + imageName)))) {
            stream.write(image.getBytes());
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return new Image(baseUrl + imagePath + imageName);
    }

    public void deleteImage(String imageName) {
        new File(imageDirectory + imageName).delete();
    }
}
