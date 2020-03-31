package com.tiendaonline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tiendaonline.dto.TiendaOnlineDto;
import com.tiendaonline.services.TiendaOnlineService;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class TiendaOnlineController {

	@Autowired
	private TiendaOnlineService service;

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	List<TiendaOnlineDto> all() {

		return service.buscarProductos();
	}

	@GetMapping("/cliente")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	List<TiendaOnlineDto> allcliente() {
		return service.buscarProductos();
	}

	@GetMapping("/cliente/detalles/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	TiendaOnlineDto vueloId(@PathVariable Long id) {
		return service.buscarId(id);
	}

	@PostMapping("/admin/nuevo")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	Boolean addVuelo(@RequestBody TiendaOnlineDto tiendaOnlineDto) {
		service.nuevoProducto(tiendaOnlineDto);
		return true;
	}

	@PostMapping("/admin/nuevos")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	Boolean addVuelos(@RequestBody List<TiendaOnlineDto> productos) {
		service.nuevosProductos(productos);
		return true;
	}

	@PutMapping("/admin/editar")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	TiendaOnlineDto editar(@RequestBody TiendaOnlineDto tiendaOnlineDto) {
		System.out.println("estoy antes de editar vuelos");
		service.editarProducto(tiendaOnlineDto);
		return tiendaOnlineDto;
	}

	@DeleteMapping("/admin/eliminar/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	Boolean deleteVuelo(@PathVariable Long id) {
		service.eliminarProducto(id);
		return true;
	}

}
