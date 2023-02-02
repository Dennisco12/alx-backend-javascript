/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface.ts';

import * from './crud.js' as CRUD;

export const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

export const newRowID: RowID = CRUD.insertRow(row);
export const updateRow: RowElement = {...row, age: 23,};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
