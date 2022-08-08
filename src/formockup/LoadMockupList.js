import CardListItem from "./CardListItems";

function LoadMockupList({ data }) {
  return (
      // <ul id="mockupId">
      //     {data && data.map((data) => (
      //         <li key={data.id}>
      //           <CardListItem data={data} />
      //         </li>
      //     ))}
      // </ul>
      <td id="mockupId">
          {data && data.map((data) => (
              <tbody key={data.id}>
                <CardListItem data={data} />
              </tbody>
          ))}
      </td>
      
  )
}

export default LoadMockupList;