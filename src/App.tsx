import './App.css'

interface TahoePeak {
  key: string
  name: string
  elevation: number
}

function List({ data, renderItem, renderEmpty }: { data: any; renderItem: (item: any) => any; renderEmpty: any }) {
  if (!data?.length) {
    return renderEmpty
  }

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.key}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

function App() {
  const tahoe_peaks: TahoePeak[] = [
    { key: 'Freel', name: 'Freel', elevation: 10891 },
    { key: 'Monument', name: 'Monument', elevation: 10067 },
    { key: 'Pyramid', name: 'Pyramid', elevation: 9983 },
    { key: 'Tallac', name: 'Tallac', elevation: 9735 },
  ]

  return (
    <>
      <List
        data={tahoe_peaks}
        renderItem={({ name, elevation }: TahoePeak) => `${name}: ${elevation}`}
        renderEmpty={<p>Empty list</p>}
      ></List>
    </>
  )
}

export default App
