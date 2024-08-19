import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data: any) {
    console.log(data);
    this.router.navigateByUrl('/');
  }

}

export class LandingFileComponent {
}
