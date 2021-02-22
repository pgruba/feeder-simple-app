import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddFeed } from '../state/actions/feeder.action';
import { Feed } from '../models/Feed';

@Injectable({
  providedIn: 'root',
})
export class TwitterService implements OnDestroy {
  message = "This message is brought to you from twitter, don't ask us how";
  interval: any;

  constructor(private store: Store) {}
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  enable(enabled: boolean) {
    if (enabled) {
      this.interval = setInterval(() => {
        const feed = <Feed>{
          author: authors[randomAuthorIndex()],
          content: this.message,
          sourceName: 'twitter',
          date: new Date(),
        };

        this.store.dispatch(new AddFeed(feed));
      }, 2000);
    }
  }
}

const randomAuthorIndex = () => Math.round(Math.random() * authors.length);

const authors = [
  'Frank',
  'Mike',
  'Albin',
  'Bart',
  'Christopher',
  'Donald',
  'Ed',
  'Frank',
  'Gustavo',
  'Henk',
  'Ilya',
  'Johnatan',
  'Kirk',
  'Ludvig',
  'Michael',
  'Nico',
  'Oliver',
  'Patrick',
  'Robert',
  'Stephan',
  'Tom',
  'Urlich',
  'Wayat',
  'Zibi',
];
