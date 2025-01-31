import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCardsPage } from './view-cards.page';

describe('ViewCardsPage', () => {
  let component: ViewCardsPage;
  let fixture: ComponentFixture<ViewCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
