package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.dto.XmlResult.GuestbookVo;

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {
	
	@ResponseBody
	@RequestMapping("/delete/{no}")
	public JsonResult ex2(@PathVariable("no") Long no, String password) {
		// 삭제 작업
		Long data = 0L;
		
		// 삭제가 안된 경우
		data = -1L;
		
		// 삭제가 안된 경우 
//		data = no;
		return JsonResult.success(data);
	}
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex2(@RequestBody GuestbookVo vo) {
		//둥록 작업 (GuestbookServce)
		vo.setNo(11L);
		vo.setPassward("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3L);
		vo3.setName("둘리3");
		vo3.setMessage("호이3");
		list.add(vo3);
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("호이2");
		list.add(vo2);
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1L);
		vo1.setName("둘리1");
		vo1.setMessage("호이1");
		list.add(vo1);

		return JsonResult.success(list);
	}
}
