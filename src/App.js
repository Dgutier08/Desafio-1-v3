import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Card'
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
   <>
  <Header 
    title='Galería de Imágenes con React'/>
    <Card class="Novia" 
    image='https://cdn1.intriper.com/wp-content/uploads/2020/04/16112503/Joven-mexicana-recrea-las-mejores-escenas-de-Los-Simpsons-mediante-bordados-y-los-resultados-son-excelentes-4-1.png'
    title='Homero de Novia'
    detail='En este capitulo Homero no tiene mas ropa limpias, sólo queda el vestido de March'
    />

   <Card class="Rafita" 
    image='https://cdn1.intriper.com/wp-content/uploads/2020/04/16112633/Joven-mexicana-recrea-las-mejores-escenas-de-Los-Simpsons-mediante-bordados-y-los-resultados-son-excelentes-2-1.png'
    title='Rafita llorando'
    detail='Rafita llora porque no tiene amigos'
    />
   <Card class="Bart" 
    image='https://cdn1.intriper.com/wp-content/uploads/2020/04/16112407/Joven-mexicana-recrea-las-mejores-escenas-de-Los-Simpsons-mediante-bordados-y-los-resultados-son-excelentes-8-1.png'
    title='Bart saltando el acantilado'
    detail='Aqui Bart es salvado por su padre'
    />

   <Card class="Acantilado" 
    image='https://cdn1.intriper.com/wp-content/uploads/2020/04/16112330/Joven-mexicana-recrea-las-mejores-escenas-de-Los-Simpsons-mediante-bordados-y-los-resultados-son-excelentes-9-1.png'
    title='Bart saltando el acantilado'
    detail='no recuerdo este capitulo'
    />

<  Footer description={"Imagenes de Bordados"} />
    </> 
   
  );
}

export default App;