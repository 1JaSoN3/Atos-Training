package com.tiendaonline.converter;

import java.util.ArrayList;
import java.util.List;

import com.tiendaonline.dto.TiendaOnlineDto;
import com.tiendaonline.entity.TiendaOnline;

public class TiendaOnlineConverter {

	public static TiendaOnline dtoToEntity(TiendaOnlineDto tiendaOnlineDto) {
		TiendaOnline tiendaOnlineEntity = new TiendaOnline();
		tiendaOnlineEntity.setId(tiendaOnlineDto.getId());
		tiendaOnlineEntity.setRopa(tiendaOnlineDto.getRopa());
		tiendaOnlineEntity.setMarca(tiendaOnlineDto.getMarca());
		tiendaOnlineEntity.setTalla(tiendaOnlineDto.getTalla());
		tiendaOnlineEntity.setColor(tiendaOnlineDto.getColor());
		tiendaOnlineEntity.setPrecio(tiendaOnlineDto.getPrecio());
		tiendaOnlineEntity.setGenero(tiendaOnlineDto.getGenero());
		tiendaOnlineEntity.setOrigen(tiendaOnlineDto.getOrigen());
		return tiendaOnlineEntity;
	}

	public static TiendaOnlineDto entityToDto(TiendaOnline tiendaOnlineEntity) {
		TiendaOnlineDto tiendaOnlineDto = new TiendaOnlineDto();
		tiendaOnlineDto.setId(tiendaOnlineEntity.getId());
		tiendaOnlineDto.setRopa(tiendaOnlineEntity.getRopa());
		tiendaOnlineDto.setMarca(tiendaOnlineEntity.getMarca());
		tiendaOnlineDto.setTalla(tiendaOnlineEntity.getTalla());
		tiendaOnlineDto.setColor(tiendaOnlineEntity.getColor());
		tiendaOnlineDto.setPrecio(tiendaOnlineEntity.getPrecio());
		tiendaOnlineDto.setGenero(tiendaOnlineEntity.getGenero());
		tiendaOnlineDto.setOrigen(tiendaOnlineEntity.getOrigen());
		return tiendaOnlineDto;
	}

	public static List<TiendaOnlineDto> entitiesToDtos(List<TiendaOnline> tiendaOnlines) {
		List<TiendaOnlineDto> tiendaOnlineDtoList = new ArrayList<>();
		for (TiendaOnline tiendaOnline : tiendaOnlines) {
			tiendaOnlineDtoList.add(entityToDto(tiendaOnline));
		}
		return tiendaOnlineDtoList;
	}
}
