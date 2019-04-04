package com.horarios.controller;

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

import com.horarios.dto.VueloDto;
import com.horarios.services.VueloService;	

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT, RequestMethod.DELETE}) 
public class VueloController {
	
	@Autowired 
	private VueloService service;

	@GetMapping("/admin") 
	@PreAuthorize("hasRole('ADMIN')")
	List<VueloDto> all(){
	
		return service.buscarVuelos();
	}
	
	@GetMapping("/cliente") 
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	List<VueloDto> allcliente(){
		return service.buscarVuelos();
	}
	
	@GetMapping("/cliente/detalles/{id}") 
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	VueloDto vueloId(@PathVariable Long id) {
		return service.buscarId(id);
	}
	
	@PostMapping("/admin/nuevo")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	Boolean addVuelo(@RequestBody VueloDto vueloDto) {
		service.nuevoVuelo(vueloDto);
		return true;
	}
	
	@PostMapping("/admin/nuevos")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody
	Boolean addVuelos(@RequestBody List<VueloDto> vuelos) {
		service.nuevosVuelos(vuelos);
		return true;
	}
	
	@PutMapping("/admin/editar")
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseBody VueloDto editar(@RequestBody VueloDto vueloDto) {
		System.out.println("estoy antes de editar vuelos");
		service.editarVuelo(vueloDto);
		return vueloDto;
	}

	@DeleteMapping("/admin/eliminar/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	Boolean deleteVuelo(@PathVariable Long id) {
		service.eliminarVuelo(id);
		return true;
	}	
	
}
