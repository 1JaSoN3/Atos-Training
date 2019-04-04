package com.horarios.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.horarios.dto.VueloDto;

@Service
public interface VueloService {

	public List<VueloDto> buscarVuelos();
	
	public VueloDto buscarId(Long id);
	
	public VueloDto nuevoVuelo(VueloDto vueloDto);
	
	public VueloDto editarVuelo(VueloDto vueloDto);
	
	public VueloDto eliminarVuelo(Long id);
	
	public List<VueloDto> nuevosVuelos(List<VueloDto> vuelos);

}
