import { PropTypes } from 'prop-types';
import { colors } from 'constants';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead className={css.transactions__head}>
        <tr>
          <th className={css.trasactions__collumn}>Type</th>
          <th className={css.trasactions__collumn}>Amount</th>
          <th className={css.trasactions__collumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            style={{
              backgroundColor:
                index % 2 ? colors.bgColorDark : colors.bgColorPrimary,
            }}
          >
            <td className={css.trasactions__collumn}>{item.type}</td>
            <td className={css.trasactions__collumn}>{item.amount}</td>
            <td className={css.trasactions__collumn}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
