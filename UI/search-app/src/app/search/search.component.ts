import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchQuery: string = '';
  constructor(private searchService: SearchService) {
  }


  onSearch() {
    this.searchService.search(this.searchQuery).subscribe(response => {
      console.log('Search results:', response);
    }, error => {
      console.error('Search error:', error);
    });
}

}
