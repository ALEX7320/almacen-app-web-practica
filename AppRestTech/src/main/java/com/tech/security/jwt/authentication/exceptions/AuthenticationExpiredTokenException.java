package com.tech.security.jwt.authentication.exceptions;


import org.springframework.security.core.AuthenticationException;

public class AuthenticationExpiredTokenException extends AuthenticationException {

	private static final long serialVersionUID = 1L;

	
	public AuthenticationExpiredTokenException(String msg) {
		super(msg);
	}

	public AuthenticationExpiredTokenException(String msg, Throwable cause) {
		super(msg, cause);
	}


}
