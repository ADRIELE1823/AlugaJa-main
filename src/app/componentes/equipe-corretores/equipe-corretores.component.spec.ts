import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeCorretoresComponent } from './equipe-corretores.component';

describe('EquipeCorretoresComponent', () => {
  let component: EquipeCorretoresComponent;
  let fixture: ComponentFixture<EquipeCorretoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeCorretoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipeCorretoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
