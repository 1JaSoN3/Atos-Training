package com.horarios.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.horarios.converter.VueloConverter;
import com.horarios.dto.VueloDto;
import com.horarios.entity.Vuelo;
import com.horarios.repository.VueloRepository;
import com.horarios.services.VueloService;

@Service
public class VueloServiceImpl implements VueloService {

	@Autowired
	private VueloRepository repo;

	@Override
	public List<VueloDto> buscarVuelos() {
		List<VueloDto> vueloDtoEncontrados = new ArrayList<VueloDto>();

		for (Vuelo vuelosBuscados : repo.findAll()) {
			vueloDtoEncontrados.add(VueloConverter.entityToDto(vuelosBuscados));
		}
		return vueloDtoEncontrados;
	}

	@Override
	public VueloDto buscarId(Long id) {
		Optional<Vuelo> optionalVuelo = repo.findById(id);
		return VueloConverter.entityToDto(optionalVuelo.isPresent() == true ? optionalVuelo.get() : new Vuelo());
	}
	
	@Override
	public VueloDto nuevoVuelo(VueloDto vueloDto) {
		try {
			repo.save(VueloConverter.dtoToEntity(vueloDto));
		} catch (Exception e) {
			
		}
		return null;
	}

	@Override
	public VueloDto editarVuelo(VueloDto vueloDto) {
		repo.save(VueloConverter.dtoToEntity(vueloDto));
		return null;
	}

	@Override
	public VueloDto eliminarVuelo(Long id) {
		repo.deleteById(id);
		return null;
	}

	@Override
	public List<VueloDto> nuevosVuelos(List<VueloDto> vuelosDto) {
		
		List<Vuelo> vuelos = new ArrayList<Vuelo>();
		
		for (VueloDto vueloDto : vuelosDto) {
			vuelos.add(VueloConverter.dtoToEntity(vueloDto));
		}
		
		return VueloConverter.entitiesToDtos(repo.saveAll(vuelos));

	}


}
