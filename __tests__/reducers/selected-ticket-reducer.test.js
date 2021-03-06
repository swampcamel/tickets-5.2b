import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

describe("selectedTicketReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

  test('Should record which ticket is selected', () => {
    expect(selectedTicketReducer({}, {type: 'SELECT_TICKET', ticketId: 1})).toEqual(1);
  });
});
