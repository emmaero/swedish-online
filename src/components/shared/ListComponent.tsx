// @ts-ignore
export default function ListComponent({ list, ComponentList }) {
  // @ts-ignore
  return list.map((item) => <ComponentList key={item.id} item={item} />);
}
