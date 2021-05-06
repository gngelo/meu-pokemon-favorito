import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoritoComponent } from './pokemon-favorito.component';

describe('PokemonFavoritoComponent', () => {
  let component: PokemonFavoritoComponent;
  let fixture: ComponentFixture<PokemonFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
