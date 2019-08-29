import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productList:any = []; 
  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }


  clickSearch(value) {
    
    value = value.toLowerCase();
    console.log(value);
    // this.searchService.getSearch(value).subscribe(data => {
    //   console.log("Location is " + data[0].id);
    //   console.log("Location first is " + data[0].farms[0].location);
    //   this.cropList = data;
    // }

    // )

    this.router.navigateByUrl("/result/"+value);

  }

}
