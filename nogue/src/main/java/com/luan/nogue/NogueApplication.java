package com.luan.nogue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@EnableScheduling
public class NogueApplication {

	public static void main(String[] args) {
		SpringApplication.run(NogueApplication.class, args);
		System.out.println(new BCryptPasswordEncoder().encode("user"));
	}
}
