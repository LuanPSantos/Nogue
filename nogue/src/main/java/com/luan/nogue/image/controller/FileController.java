package com.luan.nogue.image.controller;

import com.luan.nogue.image.model.Image;
import com.luan.nogue.image.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("files")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("images")
    public Image uploadImage(@RequestParam MultipartFile image) throws IOException {
        return fileService.saveImage(image);
    }

    @DeleteMapping("images/{name}")
    public void deleteImage(@PathVariable("name") String name) {
        fileService.deleteImage(name);
    }
}
