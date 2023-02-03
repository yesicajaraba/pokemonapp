import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonesComponent } from './lista-pokemones.component';

describe('ListaPokemonesComponent', () => {
  let component: ListaPokemonesComponent;
  let fixture: ComponentFixture<ListaPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPokemonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
