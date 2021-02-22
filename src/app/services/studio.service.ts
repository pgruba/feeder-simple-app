import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddFeed } from '../state/actions/feeder.action';
import { Feed } from '../models/Feed';

@Injectable({
  providedIn: 'root',
})
export class StudioService implements OnDestroy {
  message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
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
          sourceName: 'studio',
          date: new Date(),
        };

        this.store.dispatch(new AddFeed(feed));
      }, 1333);
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
