import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupViewPokemonComponent } from './popup-view-pokemon.component';

describe('PopupViewPokemonComponent', () => {
  let component: PopupViewPokemonComponent;
  let fixture: ComponentFixture<PopupViewPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupViewPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupViewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
