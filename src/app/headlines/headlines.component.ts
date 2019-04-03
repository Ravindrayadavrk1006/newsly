import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
headlinesText="Latest Headlines";
url;
myData=[{
  id:1,name:"ravindra",},{id:2,name:"swapnil"},];
KEY="a5c90b0f06364d588ba85378746b67f8";
baseurl="https://newsapi.org/v2/top-headlines?country=in";
headlineText="latest Headlines";
news;
  constructor(private http:HttpClient) 
  {this.url= this.baseurl + '&apikey='+this.KEY ;}

  ngOnInit() {
   // for(var a of this.myData)
    //{console.log(a)}
    this.fetchNews();
  
  }
fetchNews()
{
  this.http.get(this.url)
  .subscribe(data=>this . news=data['articles']);//function using
}
}
