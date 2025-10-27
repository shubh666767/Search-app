package com.search.search.controller;

import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
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


    @PostMapping("/upload")
    public Mono<String> upload(@RequestPart("file") Mono<FilePart> filePartMono) {
        return filePartMono.map(filePart -> {
            System.out.println("Received file: " + filePart.filename());
            return "File uploaded: " + filePart.filename();
        });
    }

}