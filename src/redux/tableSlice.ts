import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IPerson } from "../interfaces/IPerson.ts";
import { ITable } from "../interfaces/Itable.ts";
import { tableAPI } from "../api/tableAPI";


interface TableState {
  tableData: ITable | null;
  loading: boolean;
  error: string | null;
}

const initialState: TableState = {
  tableData: null,
  loading: false,
  error: null,
};

const tableSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(tableAPI.fetchPersons.fulfilled, (state, action: PayloadAction<ITable>) => {
        state.loading = false;
        state.tableData = action.payload;
      })
      .addCase(tableAPI.fetchPersons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(tableAPI.fetchPersons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred during authentication.";
      })

      .addCase(tableAPI.addPerson.fulfilled, (state, action: PayloadAction<IPerson>) => {
        if (state.tableData) {
          state.tableData.results.push(action.payload);
        }
      })
      .addCase(tableAPI.updatePerson.fulfilled, (state, action: PayloadAction<IPerson>) => {
        if (state.tableData) {
          const index = state.tableData.results.findIndex(p => p.id === action.payload.id);
          if (index !== -1) {
            state.tableData.results[index] = action.payload;
          }
        }
      })
      .addCase(tableAPI.deletePerson.fulfilled, (state, action: PayloadAction<number>) => {
        if (state.tableData) {
          state.tableData.results = state.tableData.results.filter(p => p.id !== action.payload);
        }
      });
  },
  initialState,
  name: "table",
  reducers: {},
});

export const selectTableData = (state: RootState) => state.table.tableData;
export const selectTableLoading = (state: RootState) => state.table.loading;
export const selectTableError = (state: RootState) => state.table.error;

export default tableSlice.reducer;