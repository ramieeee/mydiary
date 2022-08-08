import LoadMockupList from "./LoadMockupList";
import data from '../mockup/DatasetMock.json';

function TableForMockup() {
  
  return(
    <LoadMockupList data={data}/>
  );
  
}

export default TableForMockup;