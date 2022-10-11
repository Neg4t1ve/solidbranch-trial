import { TestBed } from '@angular/core/testing';
import mock from '../../files/transactions.json';
import { TransactionsService } from './transactions.service';

describe('TransactionsServiceService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give total count of transactions', () => {
    expect(service.getTotal()).toBe(mock.total);
  });

  it('should return empty array if wrong type', () => {
    expect(service.getFilteredList('wrong')).toEqual([]);
  });

  it('should return filtered array', () => {
    const filteredMock = mock.data.filter((i) => i.type === 'loan');
    expect(service.getFilteredList('loan')).toEqual(filteredMock);
  });
});
