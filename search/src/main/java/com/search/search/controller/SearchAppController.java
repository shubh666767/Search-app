package com.search.search.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class SearchAppController {

    @PostMapping("/search")
    public Mono<String> search(@RequestBody Mono<SearchRequest> requestMono) {
        // You can handle your search logic here
        System.out.println("Received search input: " + requestMono);
        return requestMono.map(req -> "Searching for: " + req.getQuery());
    }

    static class SearchRequest {
        private String query;
        public String getQuery() { return query; }
        public void setQuery(String query) { this.query = query; }
    }
}