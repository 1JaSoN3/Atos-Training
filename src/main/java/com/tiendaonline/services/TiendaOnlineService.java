package com.tiendaonline.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tiendaonline.dto.TiendaOnlineDto;

@Service
public interface TiendaOnlineService {

	public List<TiendaOnlineDto> buscarProductos();

	public TiendaOnlineDto buscarId(Long id);

	public TiendaOnlineDto nuevoProducto(TiendaOnlineDto tiendaOnlineDto);

	public TiendaOnlineDto editarProducto(TiendaOnlineDto tiendaOnlineDto);

	public TiendaOnlineDto eliminarProducto(Long id);

	public List<TiendaOnlineDto> nuevosProductos(List<TiendaOnlineDto> productos);

}
