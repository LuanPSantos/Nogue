package com.luan.nogue.image.service;

import com.luan.nogue.image.model.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Objects;
import java.util.UUID;

@Service
public class FileService {

    private final String SMALL_PREFIX = "-small";

    @Value("${image.directory}")
    private String imageDirectory;
    @Value("${image.path}")
    private String imagePath;
    @Value("${base.url}")
    private String baseUrl;

    public Image saveImage(MultipartFile image) throws IOException {
        String imageName = UUID.randomUUID().toString();

        String format = Objects.requireNonNull(image.getOriginalFilename())
                .substring(image.getOriginalFilename().lastIndexOf(".") + 1);

        save(new ByteArrayInputStream(image.getBytes()), imageDirectory + imageName + "." + format, format);
        resizeImageAndSave(imageName + "." + format, 70, 50, format);

        return new Image(baseUrl + imagePath + imageName + "." + format, baseUrl + imagePath + SMALL_PREFIX + imageName + "." + format);
    }

    public void deleteImage(String imageName) {
        new File(imageDirectory + imageName).delete();
    }

    private void save(InputStream imageToSave, String imageName, String imageFormat){
        try {
            BufferedImage image = ImageIO.read(imageToSave);
            ImageIO.write(image, imageFormat, new File(imageName));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void resizeImageAndSave(String imageName, int width, int height, String format) {
        try {
            BufferedImage originalImage = ImageIO.read(new File(imageDirectory + imageName));

            BufferedImage resided = new BufferedImage(width, height, originalImage.getType());

            Graphics2D g2 = resided.createGraphics();
            g2.drawImage(originalImage, 0, 0, width, height, null);
            g2.dispose();

            ImageIO.write(resided, format, new File(imageDirectory + SMALL_PREFIX + imageName));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
