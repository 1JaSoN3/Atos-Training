package com.horarios.converter;

import com.horarios.dto.UserDto;
import com.horarios.entity.User;

public class UsersConverter {
	
	public static User dtoToEntity(UserDto loginDto) {
		User loginEntity = new User();
		loginEntity.setId(loginDto.getId());
		loginEntity.setUsername(loginDto.getUser());
		loginEntity.setPassword(loginDto.getPass());
		return loginEntity;
	}

	public static UserDto entityToDto(User loginEntity) {
		UserDto loginDto = new UserDto();
		loginDto.setId(loginEntity.getId());
		loginDto.setUser(loginEntity.getUsername());
		loginDto.setPass(loginEntity.getPassword());
		return loginDto;
	}
}
