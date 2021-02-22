import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';

import { Observable, Subscription } from 'rxjs';
import { AddFeed, HideInputForm } from 'src/app/state/actions/feeder.action';
import { FeedState } from 'src/app/state/feed.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() userName: string | undefined;
  @ViewChild('contentInput') contentInput!: ElementRef;
  @Select(FeedState.getFormState) formState$!: Observable<boolean>;

  feedForm!: FormGroup;
  private formSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.userName.firstChange) {
      this.feedForm.patchValue({
        author: changes.userName.currentValue,
      });
      this.setFocusOnMessageInput();
    }
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  ngOnInit() {}

  createForm() {
    this.feedForm = this.fb.group({
      date: new Date(),
      author: ['', Validators.required],
      content: ['', Validators.required],
      sourceName: 'user_input',
    });
  }

  onSubmit() {
    this.formSubscription.add(
      (this.formSubscription = this.store
        .dispatch(new AddFeed(this.feedForm.value))
        .subscribe(() => {
          this.feedForm.controls['content'].reset();
          this.setFocusOnMessageInput();
        }))
    );
  }

  clearForm() {
    this.feedForm.reset();
  }

  private setFocusOnMessageInput() {
    this.contentInput.nativeElement.focus();
  }

  hideFormClick() {
    this.store.dispatch(new HideInputForm(true));
  }
}
