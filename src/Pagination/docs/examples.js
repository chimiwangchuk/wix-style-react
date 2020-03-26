export const basic = `
  <Pagination currentPage={1} totalPages={15}/>
`;

export const short = `
  <Layout cols={1}>
      <Cell span={1}>
          <Pagination currentPage={1}  totalPages={5} />
    </Cell>
      <Cell span={1}>
          <Pagination currentPage={5}  totalPages={5} />
      </Cell>
  </Layout>
`;

export const long = `
  <Pagination  currentPage={8} totalPages={15}/>
`;

export const interactive = `
  () => {
    const [selected, setSelected] = React.useState(1);
    const handleChange = ({page, event}) => {
      event.preventDefault();
      setSelected(page);
    }
    return  <Pagination currentPage={selected} totalPages={15} onChange={handleChange}/>
  }
`;
