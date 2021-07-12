package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;

@Controller
public class HelloController {
	@ResponseBody
	@RequestMapping("/hello")
	public JsonResult hello() {
		return JsonResult.success("hello world");
	}
}