import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { Content } from '../../shared/models/content.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
  standalone: false
})
export class PlayerPage implements OnInit, OnDestroy {
  content: Content | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contentService.getById(id).subscribe(content => {
        this.content = content || null;
      });
    }
  }

  ngOnDestroy() {
    this.content = null;
  }

  goBack() {
    this.router.navigate(['/content-detail', this.content?.id]);
  }
}
