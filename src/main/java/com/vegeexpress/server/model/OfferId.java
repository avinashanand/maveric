package com.vegeexpress.server.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class OfferId implements Serializable {
	
	private String ItemId, SellerId;
	
	public OfferId() {
		
	}
	public OfferId(String itemId, String sellerId) {
		this.ItemId = itemId;
		this.SellerId = sellerId;
	}

	public String getItemId() {
		return ItemId;
	}

	public void setItemId(String itemId) {
		ItemId = itemId;
	}

	public String getSellerId() {
		return SellerId;
	}

	public void setSellerId(String sellerId) {
		SellerId = sellerId;
	}

}

