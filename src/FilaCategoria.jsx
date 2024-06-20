// FilaCategoria.jsx

import React from 'react';

function FilaCategoria({ categoria }) {
  const esCentrado = categoria === 'Cafetería' || categoria === 'Panadería' || categoria === 'Dulces';

  return (
    <tr>
      <th colSpan="3" style={{ textAlign: esCentrado ? 'center' : 'left' }}>{categoria}</th>
    </tr>
  );
}

export default FilaCategoria;
