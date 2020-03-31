package com.tiendaonline.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TiendaOnline")
public class TiendaOnline {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "Ropa")
	private String ropa;

	@Column(name = "Marca")
	private String marca;

	@Column(name = "Talla")
	private String talla;

	@Column(name = "Color")
	private String color;

	@Column(name = "Precio")
	private String precio;

	@Column(name = "Genero")
	private String genero;

	@Column(name = "Origen")
	private String origen;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRopa() {
		return ropa;
	}

	public void setRopa(String ropa) {
		this.ropa = ropa;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getTalla() {
		return talla;
	}

	public void setTalla(String talla) {
		this.talla = talla;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getOrigen() {
		return origen;
	}

	public void setOrigen(String avion) {
		this.origen = avion;
	}

}
