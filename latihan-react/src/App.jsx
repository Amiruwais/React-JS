import './App.css';

/**
 * Membuat compoent Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

/**
 * Membuat component COntent.
 * Component Content menampung konten utama
 */
function Content() {
  return <h1>Content</h1>;
}


/**
 * Membuat component Footer.
 * Component Footer menampilkan footer
 */
function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
    );
  }

function Hello (){
  const nama = "Amir";
  return (
    <>
    <h2>Hello React</h2>
    <p> Saya {nama} - Seorang Frontend Developer</p>
    </>
  );
}

function Greeting (props) {
  return <h1>Hello, {props.name}</h1>;
}

function Profile(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <p>{props.country}</p>
    </>
  )
}

function App() {
  return (
  <>
  <Header />
  <Content/>
  <Hello />
  <Greeting name ="Mir" />
  <Greeting name ="Aulia" />
  <Profile name="Aming" age={20} country="Indonesia" />
  <Footer />
  </>
  );
}

export default App;
