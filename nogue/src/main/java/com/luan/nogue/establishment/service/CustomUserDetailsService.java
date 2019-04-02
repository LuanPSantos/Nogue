package com.luan.nogue.establishment.service;

import com.luan.nogue.establishment.repository.EstablishmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private EstablishmentRepository establishmentRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return establishmentRepository.findByEstablishmentCredentialsUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }
}
