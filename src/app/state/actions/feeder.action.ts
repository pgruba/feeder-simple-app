import { Feed } from '../../models/Feed';

export class AddFeed {
  static readonly type = '[Feed] Add';

  constructor(public payload: Feed) {}
}

export class GetFeeds {
  static readonly type = '[Feed] Get';
}

export class CreateUserName {
  static readonly type = '[Feed] UserName';
  constructor(public payload: string) {}
}

export class HideInputForm {
  static readonly type = '[Feed] HideInputForm';
  constructor(public payload: boolean) {}
}
