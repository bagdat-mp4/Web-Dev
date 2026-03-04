import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  albums: Album[] = [];
  loading = true;
  slowApi = false;

  private slowTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.slowTimer = setTimeout(() => {
      if (this.loading) {
        this.slowApi = true;
        this.cdr.detectChanges();
      }
    }, 5000);

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        const deleted = JSON.parse(localStorage.getItem('deletedAlbumIds') || '[]');
        this.albums = data.filter(a => !deleted.includes(a.id)).slice(0, 20);
        this.loading = false;
        this.slowApi = false;
        clearTimeout(this.slowTimer);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load albums:', err);
        this.loading = false;
        this.slowApi = false;
        clearTimeout(this.slowTimer);
        this.cdr.detectChanges();
        
      }
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.slowTimer);
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      const deleted = JSON.parse(localStorage.getItem('deletedAlbumIds') || '[]');
      deleted.push(id);
      localStorage.setItem('deletedAlbumIds', JSON.stringify(deleted));
      this.cdr.detectChanges();
    });
  }
}


