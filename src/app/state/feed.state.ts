import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AddFeed,
  CreateUserName,
  HideInputForm,
} from './actions/feeder.action';
import { FeedStateModel } from '../models/FeedStateModel';

@State<FeedStateModel>({
  name: 'feeds',
  defaults: {
    feeds: [],
    userName: null,
    formHidden: false,
  },
})
@Injectable()
export class FeedState {
  constructor() {}

  @Selector()
  static getFeeds(state: FeedStateModel) {
    return state.feeds;
  }

  @Action(AddFeed)
  addFeed(
    { getState, patchState }: StateContext<FeedStateModel>,
    { payload }: AddFeed
  ) {
    const state = getState();
    state.feeds.unshift(payload);

    patchState({
      feeds: state.feeds,
    });
  }

  @Action(CreateUserName)
  createUserName(
    { getState, patchState }: StateContext<FeedStateModel>,
    { payload }: CreateUserName
  ) {
    const state = getState();
    state.userName = payload;

    patchState({
      userName: state.userName,
    });
  }

  @Action(HideInputForm)
  hideInputForm(
    { getState, patchState }: StateContext<FeedStateModel>,
    { payload }: HideInputForm
  ) {
    const state = getState();
    state.formHidden = payload;
    patchState({
      formHidden: payload,
    });
  }

  @Selector()
  static getFormState(state: FeedStateModel) {
    return state.formHidden;
  }
}
