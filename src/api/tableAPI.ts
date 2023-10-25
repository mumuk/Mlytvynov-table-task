import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITable} from "../interfaces/Itable.ts";
import {IPerson} from "../interfaces/IPerson.ts";

const fetchPersons = createAsyncThunk("Table/fetchItems", async (): Promise<ITable> => {
  const {data} = await axios.get("https://technical-task-api.icapgroupgmbh.com/api/table/");
  return data;
})


const addPerson = createAsyncThunk("Table/addItem", async (person: IPerson) => {
  const {data} = await axios.post("https://technical-task-api.icapgroupgmbh.com/api/table/", person);

  return data;
})

const updatePerson = createAsyncThunk("Table/updateItem", async (person: IPerson) => {
  const {data} = await axios.patch(`https://technical-task-api.icapgroupgmbh.com/api/table/${person.id}/`, person);
  return data;
});

const deletePerson = createAsyncThunk("Table/deleteItem", async (id: number) => {
  await axios.delete(`https://technical-task-api.icapgroupgmbh.com/api/table/${id}/`);
  return id;
});




export const tableAPI = {
  fetchPersons,
  addPerson,
  deletePerson,
  updatePerson,
}


