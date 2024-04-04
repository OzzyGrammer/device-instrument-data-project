function convertAllDeviceRowsToTableRows(
  rows: AllDeviceRow[],
): AllDeviceTableRow[] {
  return rows.map((row) => {
    const value = row.parameter.devicedataSet.map(
      (dataset) => dataset.value,
    )[0];
    const type = row.parameter.devicedataSet.map((dataset) => dataset.type)[0];

    return {
      id: row.id,
      timestamp: row.timestamp,
      parameter: row.parameter.title,
      value: value,
      type: type,
    };
  });
}

export default convertAllDeviceRowsToTableRows;
