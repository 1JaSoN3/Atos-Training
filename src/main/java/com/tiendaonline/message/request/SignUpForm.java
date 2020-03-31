package com.tiendaonline.message.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignUpForm {
	
    @NotBlank
    @Size(min = 3, max = 50)
    private String username;
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Set<String> getRole() {
		return role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
 
}
