export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
};

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      if (state.transactions.length === 0) {
        return {
          transactions: [
            {
              id: 1,
              text: action.info.text,
              amount: action.info.amount,
            },
          ],
        };
      } else {
        const lastTransactionId =
          state.transactions[state.transactions.length - 1].id;
        return {
          transactions: [
            ...state.transactions,
            {
              id: lastTransactionId + 1,
              text: action.info.text,
              amount: action.info.amount,
            },
          ],
        };
      }

      break;

    case ACTIONS.DELETE:
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.info.id
        ),
      };
      break;

    default:
      return state;
  }
};
