package com.vegeexpress.server;

import org.springframework.data.repository.CrudRepository;

import com.vegeexpress.server.model.Catalog;

public interface CatalogRepository extends CrudRepository<Catalog, Integer> {

}
