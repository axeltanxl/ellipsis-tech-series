import Pie from "../charts/Pie"

const SodiumPie = () => {
    return (
        <>
            <Pie data={data}/>
        </>
    )
}
export default SodiumPie;
const data = [
    {
      "id": "breakfast",
      "label": "breakfast",
      "value": 231,
      "color": "hsl(98, 70%, 50%)"
    },
    {
      "id": "lunch",
      "label": "lunch",
      "value": 116,
      "color": "hsl(181, 70%, 50%)"
    },
    {
      "id": "dinner",
      "label": "dinner",
      "value": 500,
      "color": "hsl(13, 70%, 50%)"
    },
    
  ]