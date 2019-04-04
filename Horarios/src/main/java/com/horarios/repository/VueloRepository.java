package com.horarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.horarios.entity.Vuelo;

@Repository
public interface VueloRepository extends JpaRepository<Vuelo, Long>{
	

}
