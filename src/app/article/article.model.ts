export class Article{
    title: string;
    votes: number;
    link: string;

    constructor(title: string, link: string, votes?: number) {
         this.title = title;
         this.link = link;
         this.votes = votes || 0; //means that default value is 0
         }
        
     voteUp(): void {
         this.votes +=1;
     }  
     
     voteDown(): void {
        this.votes -=1;
    }    

    domain(): string {
        try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = this.link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
         } catch (err) {
        return null;
         }
        }
    }



//it is a good practice to isolate the component from the actual data structures we're going to use.
//Within the MVC architectural pattern, this class would be the model
//the ? means that that actual parameter is optional