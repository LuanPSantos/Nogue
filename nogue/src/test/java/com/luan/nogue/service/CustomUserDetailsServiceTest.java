package com.luan.nogue.service;

import com.luan.nogue.entity.Establishment;
import static org.junit.Assert.*;

import com.luan.nogue.repository.EstablishmentRepository;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import static org.mockito.Mockito.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static com.luan.nogue.creator.ObjectsCreator.createEstablishment;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomUserDetailsServiceTest {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @MockBean
    private EstablishmentRepository establishmentRepository;

    @Test
    @DisplayName("Should find the establishment(user) by his email")
    public void should_find_the_establishment_by_email(){
        Establishment establishment = createEstablishment();
        when(establishmentRepository.findByEstablishmentCredentialsUsername(any())).thenReturn(Optional.of(establishment));

        UserDetails userDetails = customUserDetailsService.loadUserByUsername("email");

        assertEquals(establishment.getEmail(), userDetails.getUsername());
        assertEquals(establishment.getPassword(), userDetails.getPassword());
    }

    @Test(expected = UsernameNotFoundException.class)
    @DisplayName("Should not find the establishment(user) by his email")
    public void should_not_find_the_establishment_by_email(){
        when(establishmentRepository.findByEstablishmentCredentialsUsername(any())).thenReturn(Optional.empty());

        customUserDetailsService.loadUserByUsername("email");
    }
}
