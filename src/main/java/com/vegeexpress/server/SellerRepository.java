package com.vegeexpress.server;

import org.springframework.data.repository.CrudRepository;

import com.vegeexpress.server.model.Seller;


public interface SellerRepository extends CrudRepository<Seller, Integer> {
	
}
