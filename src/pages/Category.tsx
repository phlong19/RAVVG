interface Props {
  name: string;
}

function Category({ name }: Props) {
  return <div>category: {name}</div>;
}

export default Category;
