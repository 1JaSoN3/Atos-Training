package com.tiendaonline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tiendaonline.entity.TiendaOnline;

@Repository
public interface TiendaOnlineRepository extends JpaRepository<TiendaOnline, Long>{
	

}
