package com.vegeexpress.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vegeexpress.server.model.Seller;

@Controller // This means that this class is a Controller
@RequestMapping(path="/seller")
public class SellerController {
	@Autowired
	private SellerRepository sellerRepository;
	
	@PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewSeller (@RequestBody Seller seller) {
		System.out.println(seller);
		sellerRepository.save(seller);
		return "Saved";
		
	}
	@GetMapping(path="/all")
	  public @ResponseBody Iterable<Seller> getAllSellers() {
	    // This returns a JSON or XML with the users
	    return sellerRepository.findAll();
	  }

}
