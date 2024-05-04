import React from "react";
import styled from "styled-components";
import { CompleteButton, DeleteButton } from "./completedButton";

// Definir los estilos de la tabla y sus celdas
const Table = styled.table`
  width: 75%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const TaskDataTable = ({ data, onEdit, onDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Nombre</Th>
          <Th>Descripción</Th>
          <Th></Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) &&
          data.map((item) => (
            <tr key={item.id}>
              <Td>
                {item.name} - {item.completed ? "✅" : "🚫"}
              </Td>
              <Td>{item.description}</Td>
              <Td>
                <CompleteButton
                  completed={item.completed}
                  onClick={() => onEdit(item.id)}
                >
                  completar
                </CompleteButton>
              </Td>
              <Td>
                <DeleteButton onClick={() => onDelete(item.id)}>
                  Eliminar
                </DeleteButton>
              </Td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
