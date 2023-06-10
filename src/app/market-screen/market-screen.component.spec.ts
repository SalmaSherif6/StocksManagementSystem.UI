import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketScreenComponent } from './market-screen.component';

describe('MarketScreenComponent', () => {
  let component: MarketScreenComponent;
  let fixture: ComponentFixture<MarketScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketScreenComponent]
    });
    fixture = TestBed.createComponent(MarketScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
