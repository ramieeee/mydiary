function CardListItem({data}) {
  const {id, datasetName, volumeName} = data;
  return(
    <div className='mockupData'>
        <div className="mockupDatasetName">{datasetName}</div>
        <div className="mockupVolumeName">{volumeName}</div>
    </div>
  );
}

export default CardListItem;