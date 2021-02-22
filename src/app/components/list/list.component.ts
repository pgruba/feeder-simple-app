import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetFeeds } from 'src/app/state/actions/feeder.action';
import { FeedState } from 'src/app/state/feed.state';
import { Feed } from 'src/app/models/Feed';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Select(FeedState.getFeeds) feeds!: Observable<Feed[]>;
  @ViewChild('table') table!: MatTable<Feed[]>;

  displayedColumns: string[] = ['date', 'content'];
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetFeeds());
    this.store.subscribe((dupa) => {
      if (this.store && this.table) {
        this.table.renderRows();
      }
    });
  }
}
