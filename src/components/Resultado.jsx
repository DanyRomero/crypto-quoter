/* eslint-disable react/prop-types */
// import React from "react";
// import styled from "@emotion/styled";

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
  return (
    <div>
      <p>
        El precio es de: <span>{PRICE}</span>
      </p>
      <p>
        Precio más alto del día: <span>{HIGHDAY}</span>
      </p>
      <p>
        Precio más bajo del día: <span>{LOWDAY}</span>
      </p>
      <p>
        Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última actualización: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Resultado;
