const Child = ({ data, data2, data3, arr: [x, y, { status: z }] }) => {
  return (
    <>
      <h1>{data}</h1>
      <div>親で何も指定されていない場合は {data2 ? "true" : "false"} です</div>
      <div>{data3[0] + data3[1] + "の" + data3[2].status}です</div>
      <div>{x + y + "の" + z}です</div>
    </>
  );
};

export default Child;
