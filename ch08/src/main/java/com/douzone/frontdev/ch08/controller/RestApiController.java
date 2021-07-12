package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
	
	@PostMapping("")
	public JsonResult create(@RequestBody UserVo vo) {
		vo.setNo(10L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}

	@GetMapping("")
	public JsonResult read() {
		List<UserVo> list = new ArrayList<>();
		return JsonResult.success(list);
	}
	
	@GetMapping("/{no}")
	public JsonResult read(@PathVariable("no") Long no) {
		UserVo vo = new UserVo();
		vo.setNo(no);
		vo.setName("둘리");
		vo.setEmail("dooly@gmail.com");
		vo.setGender("male");
		
		return JsonResult.success(vo);
	}

	@PutMapping("/{no}")
	public JsonResult update(
		@PathVariable("no") Long no,
		@RequestBody UserVo vo) {
		vo.setNo(no);
		return JsonResult.success(vo);
	}

	@DeleteMapping("/{no}")
	public JsonResult delete(
		@PathVariable("no") Long no,
		@RequestParam(value="password", required=true, defaultValue="") String password) {
		System.out.println("password:" + password);
		return JsonResult.success(no);
	}
}