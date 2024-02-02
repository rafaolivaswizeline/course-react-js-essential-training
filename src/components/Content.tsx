import Dish from '../interfaces/dish'
import Menu from './Menu'

export default function Content({
  adjective,
  dishes,
}: {
  adjective: string
  dishes: Dish[]
}) {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=6000&h=400&dpr=1"
        alt="restaurant look"
      />

      <section>
        <p>We serve the most {adjective} food around</p>
      </section>

      <section>
        <p>Our menu is:</p>
        <Menu dishes={dishes} />
      </section>
    </>
  )
}
