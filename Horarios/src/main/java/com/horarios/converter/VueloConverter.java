package com.horarios.converter;

import java.util.ArrayList;
import java.util.List;

import com.horarios.dto.VueloDto;
import com.horarios.entity.Vuelo;

public class VueloConverter {
	
	public static Vuelo dtoToEntity(VueloDto vueloDto) {
		Vuelo vueloEntity = new Vuelo();
		vueloEntity.setId(vueloDto.getId());
		vueloEntity.setAvion(vueloDto.getAvion());
		vueloEntity.setDestino(vueloDto.getDestino());
		vueloEntity.setEmbarque(vueloDto.getEmbarque());
		vueloEntity.setSalida(vueloDto.getSalida());
		vueloEntity.setPuerta(vueloDto.getPuerta());
		vueloEntity.setTiempo(vueloDto.getTiempo());
		vueloEntity.setVuelo(vueloDto.getVuelo());
		return vueloEntity;
	}

	public static VueloDto entityToDto(Vuelo vueloEntity) {
		VueloDto vueloDto = new VueloDto();
		vueloDto.setId(vueloEntity.getId());
		vueloDto.setAvion(vueloEntity.getAvion());
		vueloDto.setDestino(vueloEntity.getDestino());
		vueloDto.setEmbarque(vueloEntity.getEmbarque());
		vueloDto.setSalida(vueloEntity.getSalida());
		vueloDto.setPuerta(vueloEntity.getPuerta());
		vueloDto.setTiempo(vueloEntity.getTiempo());
		vueloDto.setVuelo(vueloEntity.getVuelo());
		return vueloDto;
	}
	
	public static List<VueloDto> entitiesToDtos(List<Vuelo> vuelos) {
		List<VueloDto> vuelosDtoList = new ArrayList<>();
		for(Vuelo vuelo: vuelos) {
			vuelosDtoList.add(entityToDto(vuelo));
		}
		return vuelosDtoList;
	}
}
