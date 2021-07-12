package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RestTestController {
	
	@RequestMapping("/rest/test")
	public String test() {
		return "rest-test";
	}
}