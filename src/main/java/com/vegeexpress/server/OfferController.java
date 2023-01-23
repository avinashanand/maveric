package com.vegeexpress.server;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vegeexpress.server.model.Catalog;
import com.vegeexpress.server.model.Offer;
import com.vegeexpress.server.model.Seller;

@Controller // This means that this class is a Controller
@RequestMapping(path="/offer")
public class OfferController {
	
	@Autowired
	private OfferRepository offerRepository;
	
	@PostMapping(path="/add") // Map ONLY POST Requests
	public @ResponseBody String addNewOffer(@RequestBody Offer offer) {
		offerRepository.save(offer);
		return "success";
		
	}
	
	@PostMapping(path="/newadd")
	public @ResponseBody String addOffer(@RequestParam String discount, @RequestParam String price,
			@RequestParam String unit, @RequestParam String unit_id, @RequestParam String seller_id) {
		Catalog catalog = new Catalog();
		catalog.setId(Integer.parseInt(unit_id));
		
		Seller seller  = new Seller();
		seller.setId(Integer.parseInt(seller_id));
		
		Offer offer = new Offer();
		offer.setCatalog(catalog);
		offer.setDiscount(discount);
		offer.setPrice(price);
		offer.setSeller(seller);
		offer.setUnit(unit);
		
		offerRepository.save(offer);
		
		return "Success";
		
		
	}
	@GetMapping(path="/all")
	  public @ResponseBody Iterable<Offer> getAllOffers() {
	    // This returns a JSON or XML with the users
	    return offerRepository.findAll();
	  }
	@GetMapping(path="/best")
	public @ResponseBody Object getBestOffer(){
		return offerRepository.getBestOfferForAllItem();
	}
	public static <T> Predicate<T> distinctByKey(
		    Function<? super T, ?> keyExtractor) {
		  
		    Map<Object, Boolean> seen = new ConcurrentHashMap<>(); 
		    return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null; 
		}

}
