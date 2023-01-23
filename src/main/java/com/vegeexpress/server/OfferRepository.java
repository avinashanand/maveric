package com.vegeexpress.server;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.vegeexpress.server.model.Offer;

public interface OfferRepository extends CrudRepository<Offer, Integer> {
	
	@Query(value ="select * from Offer o group by o.item_id;", nativeQuery=true)
	Iterable<Offer> getBestOfferForAllItem();

}
