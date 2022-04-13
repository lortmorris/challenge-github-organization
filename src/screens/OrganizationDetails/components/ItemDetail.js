import React from 'react';

import Text from '../../../components/Text';
import Row from '../../../components/Row';
import Box from '../../../components/Box';

function ItemDetail({ data }) {
  return (
    <Box>
      {data.map((i) => (
        <Row key={i.label}>
          <Text fontSize={18} fontWeight="bold" color="blue">
            {`${i.label}: `}
          </Text>
          <Text fontSize={16} paddingLeft={10}>
            {`${i.value}`}
          </Text>
        </Row>
      ))}
    </Box>
  );
}

export default ItemDetail;
