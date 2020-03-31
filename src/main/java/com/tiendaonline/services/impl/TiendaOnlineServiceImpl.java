package com.tiendaonline.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiendaonline.converter.TiendaOnlineConverter;
import com.tiendaonline.dto.TiendaOnlineDto;
import com.tiendaonline.entity.TiendaOnline;
import com.tiendaonline.repository.TiendaOnlineRepository;
import com.tiendaonline.services.TiendaOnlineService;

@Service
public class TiendaOnlineServiceImpl implements TiendaOnlineService {

	@Autowired
	private TiendaOnlineRepository repo;

	@Override
	public List<TiendaOnlineDto> buscarProductos() {
		List<TiendaOnlineDto> vueloDtoEncontrados = new ArrayList<TiendaOnlineDto>();

		for (TiendaOnline vuelosBuscados : repo.findAll()) {
			vueloDtoEncontrados.add(TiendaOnlineConverter.entityToDto(vuelosBuscados));
		}
		return vueloDtoEncontrados;
	}

	@Override
	public TiendaOnlineDto buscarId(Long id) {
		Optional<TiendaOnline> optionalVuelo = repo.findById(id);
		return TiendaOnlineConverter
				.entityToDto(optionalVuelo.isPresent() == true ? optionalVuelo.get() : new TiendaOnline());
	}

	@Override
	public TiendaOnlineDto nuevoProducto(TiendaOnlineDto tiendaOnlineDto) {
		try {
			repo.save(TiendaOnlineConverter.dtoToEntity(tiendaOnlineDto));
		} catch (Exception e) {

		}
		return null;
	}

	@Override
	public TiendaOnlineDto editarProducto(TiendaOnlineDto tiendaOnlineDto) {
		repo.save(TiendaOnlineConverter.dtoToEntity(tiendaOnlineDto));
		return null;
	}

	@Override
	public TiendaOnlineDto eliminarProducto(Long id) {
		repo.deleteById(id);
		return null;
	}

	@Override
	public List<TiendaOnlineDto> nuevosProductos(List<TiendaOnlineDto> vuelosDto) {

		List<TiendaOnline> tiendaOnlines = new ArrayList<TiendaOnline>();

		for (TiendaOnlineDto tiendaOnlineDto : vuelosDto) {
			tiendaOnlines.add(TiendaOnlineConverter.dtoToEntity(tiendaOnlineDto));
		}

		return TiendaOnlineConverter.entitiesToDtos(repo.saveAll(tiendaOnlines));

	}

}
