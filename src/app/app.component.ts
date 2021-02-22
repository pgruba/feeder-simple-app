import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreateUserName, HideInputForm } from './state/actions/feeder.action';
import { WelcomeDialogComponent } from './components/dialogs/welcome-dialog/welcome-dialog.component';
import { FeedState } from './state/feed.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Select(FeedState.getFormState) formState$!: Observable<boolean>;
  title = 'feeder';
  userName: string | undefined;
  scroll: boolean = false;

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(WelcomeDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.store.dispatch(new CreateUserName(result.userName)).subscribe(() => {
        this.userName = result.userName;
      });
    });
  }

  chatButtonClick() {
    this.store.dispatch(new HideInputForm(false));
  }
}
