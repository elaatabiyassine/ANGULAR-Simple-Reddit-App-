import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row'; //Basically the css class we want to apply to the host of this component, in this case the host element will be the app-article tag
  @Input() article: Article;

  constructor() { 
    
      
    
  }


  voteUp(){
    this.article.voteUp();
    return false;  //since the upvote and downvotes are links, and javascript propagates events upwards to parents, it is necessary to return false
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

 

}
