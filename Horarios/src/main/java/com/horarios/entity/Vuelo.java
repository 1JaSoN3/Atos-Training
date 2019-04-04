package com.horarios.entity;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "Vuelos")
public class Vuelo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="Vuelo", unique=true)
	private String vuelo;
	
	@Column(name="Destino")
	private String destino;
	
	@Column(name="Embarque")
	private LocalTime embarque;
	
	@Column(name="Salida")
	private LocalTime salida;
	
	@Column(name="Puerta")
	private String puerta;
	
	@Column(name="Tiempo")
	private LocalTime tiempo;
	
	@Column(name="Avion")
	private String avion;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVuelo() {
		return vuelo;
	}

	public void setVuelo(String vuelo) {
		this.vuelo = vuelo;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public LocalTime getEmbarque() {
		return embarque;
	}

	public void setEmbarque(LocalTime embarque) {
		this.embarque = embarque;
	}

	public LocalTime getSalida() {
		return salida;
	}

	public void setSalida(LocalTime salida) {
		this.salida = salida;
	}

	public String getPuerta() {
		return puerta;
	}

	public void setPuerta(String puerta) {
		this.puerta = puerta;
	}

	public LocalTime getTiempo() {
		return tiempo;
	}

	public void setTiempo(LocalTime tiempo) {
		this.tiempo = tiempo;
	}

	public String getAvion() {
		return avion;
	}

	public void setAvion(String avion) {
		this.avion = avion;
	}

}
