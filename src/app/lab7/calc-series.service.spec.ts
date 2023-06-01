import { TestBed } from '@angular/core/testing';
import { CalcSeriesService } from './calc-series.service';

describe('CalcSeriesService', () => {
  let service: CalcSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcSeriesService);
  });

  it('should calculate the series for a given x and compare with cos(x)', () => {
    const x = 0.5;
    const result = service.calculate(x);

    const expected = Math.cos(x); // Обчислення cos(x) для порівняння

    expect(result).toBeCloseTo(expected, 10); 
  });

  it('should calculate the series for negative x and compare with cos(x)', () => {
    const x = -2;
    const result = service.calculate(x);

    const expected = Math.cos(x); 

    expect(result).toBeCloseTo(expected, 10);
  });


});
