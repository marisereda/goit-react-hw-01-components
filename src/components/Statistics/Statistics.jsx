import { PropTypes } from 'prop-types';
import { getRandomColor } from 'utils';
import { Box } from 'components/Box';
import { Title, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box boxShadow="primary" as="section">
      {title && <Title>{title}</Title>}

      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {stats.map(({ id, label, percentage }) => {
          const color = getRandomColor();
          return (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gridGap={3}
              minWidth="statisticBox"
              padding={4}
              color="textPrimary"
              bg={color}
              as="li"
              key={id}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
