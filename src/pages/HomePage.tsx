import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store.tsx";
import {useEffect, useState} from "react";
import {tableAPI} from "../api/tableAPI.ts";
import {AppDispatch} from "../redux/store.tsx";
import Table from "../components/Table/Table.tsx";
import EditFieldModal from "../components/EditFieldModal/EditFieldModal.tsx";
import {IPerson} from "../interfaces/IPerson.ts";


function convertDate(dateString: string) {
  const [day, month, year] = dateString.split("-");
  const date = new Date(`${month}-${day}-${year.length === 2 ? (+year < 50 ? "20" : "19") + year : year}`);

  const fullYear = date.getFullYear();
  const monthWithZero = (date.getMonth() + 1).toString().padStart(2, '0');
  const dayWithZero = date.getDate().toString().padStart(2, '0');
  return `${fullYear}-${monthWithZero}-${dayWithZero}`;
}


function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<null | IPerson>(null);
  const [selectedField, setSelectedField] = useState<null | string>(null);
  const data = useSelector((state: RootState) => state.table.tableData);

  const persons = data?.results

  useEffect(() => {
    dispatch(tableAPI.fetchPersons());
  }, [dispatch])

  const onHandleEdit = (fieldType: string, value: any, personId: number) => {

    setSelectedField(fieldType)
    const selected = data?.results.find((person: any) => person.id === personId);
    if (!selected) return;
    setSelectedPerson(selected);
    setVisibleEditModal(true);

    console.log(fieldType, value, personId);
  }

  const onHandleCloseModal = () => {
    setVisibleEditModal(false);
  }
  const onHandleSave = (person: IPerson) => {
    setVisibleEditModal(false);
    person.birthday_date = convertDate(person.birthday_date)

    dispatch(tableAPI.updatePerson(person));
  }

  const onHandleDelete = (personId: number) => {
    dispatch(tableAPI.deletePerson(personId));
  }

  return (
    <>
      {visibleEditModal &&
        selectedPerson &&
        selectedField &&
          <EditFieldModal
              fieldType={selectedField}
              person={selectedPerson}
              onClose={onHandleCloseModal}
              onSave={onHandleSave}/>}
      {persons ? <Table
        data={data}
        onEditClick={onHandleEdit}
        onDeleteClick={onHandleDelete}
      /> : <div>Loading...</div>}
    </>
  );
}

export default HomePage;