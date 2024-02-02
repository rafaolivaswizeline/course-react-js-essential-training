import Dish from '../interfaces/dish'

export default function Menu({ dishes }: { dishes: Dish[] }) {
  return (
    <ul>
      {dishes.map(({ id, name }) => (
        <li key={id}>{`${name[0].toUpperCase()}${name.substring(1)}`}</li>
      ))}
    </ul>
  )
}
