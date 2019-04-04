package com.horarios.dto;

import java.time.LocalTime;

public class VueloDto {

	private Long id; 
	private String vuelo, destino, puerta, avion;
	private LocalTime embarque, salida, tiempo;
	
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
	public String getPuerta() {
		return puerta;
	}
	public void setPuerta(String puerta) {
		this.puerta = puerta;
	}
	public String getAvion() {
		return avion;
	}
	public void setAvion(String avion) {
		this.avion = avion;
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
	public LocalTime getTiempo() {
		return tiempo;
	}
	public void setTiempo(LocalTime tiempo) {
		this.tiempo = tiempo;
	}

}
