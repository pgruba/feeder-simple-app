import { Feed } from './Feed';

export class FeedStateModel {
  feeds!: Feed[];
  userName!: string | null;
  formHidden: boolean = false;
}
