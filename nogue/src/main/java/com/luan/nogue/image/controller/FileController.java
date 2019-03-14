package com.luan.nogue.image.controller;

import com.luan.nogue.image.model.Image;
import com.luan.nogue.image.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("file")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("image")
    public Image uploadImage(@RequestParam MultipartFile image) {
        return fileService.saveImage(image);
    }

    @DeleteMapping("image/{name}")
    public void deleteImage(@PathVariable("name") String name) {
        fileService.deleteImage(name);
    }
}
