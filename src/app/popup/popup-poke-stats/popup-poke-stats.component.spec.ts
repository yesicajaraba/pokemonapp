import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPokeStatsComponent } from './popup-poke-stats.component';

describe('PopupPokeStatsComponent', () => {
  let component: PopupPokeStatsComponent;
  let fixture: ComponentFixture<PopupPokeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPokeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPokeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
