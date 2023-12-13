// const miH1 = document.createElement('h1');
// miH1.textContent = 'Hola mundo';
// document.body.appendChild(miH1);

// FUNCIONES

// function suma(a, b){
//   return a + b;
// }

// console.log('suma', suma(1, 2));

// const mostrarNombre = () => {
//   alert('Hola Lautaro');
// }

// const miH1 = document.getElementsByTagName('h1');
// console.log('miH1', miH1[1].textContent);
// const miBoton = document.getElementById('miBoton');

// miBoton.addEventListener('click', mostrarNombre);



//DOM
const Articulos = [
  {
    titulo: 'Titulo 1',
    contenido: 'Contenido 1'

  },
  {
    titulo: 'Titulo 2',
    contenido: 'Contenido 2'
  },
  {
    titulo: 'Titulo 3',
    contenido: 'Contenido 3'
  }
];

const crearArticulos = () => {
  for (let i = 0; i < Articulos.length; i++) {
    crearArticulo(Articulos[i].titulo, Articulos[i].contenido);
  }
}

function crearArticulo(titulo, contenido) {
  // const titulo = document.getElementById('titulo').value;
  // const contenido = document.getElementById('contenido').value;

  if (titulo === '') {
    alert('El titulo es obligatorio');
    document.getElementById('miFormulario').reset()
    return
  }
  const miArticulo = document.createElement('article');
  const miTitulo = document.createElement('h2');
  miArticulo.classList.add('articulo');
  miTitulo.textContent = titulo;
  miArticulo.appendChild(miTitulo);

  if (contenido != '') {
    const miContenido = document.createElement('p');
    miContenido.textContent = contenido;
    miArticulo.appendChild(miContenido);
  }

  document.body.appendChild(miArticulo);

  document.getElementById('miFormulario').reset()
}

const qualifications = [
  {
      "id": 28,
      "title": "Section 3(c)(7) Excepted Fund",
      "text": "A company that would be an investment company under the Investment Company Act of 1940 but for the exception provided in Section 3(c)(7) of the Act.",
      "ieTypes": [
          "trust",
          "llc",
          "lp",
          "fofllc",
          "foflp",
          "corporation",
          "pension_plan",
          "foundation",
          "endowment",
          "estate",
          "investment_club",
          "general_partnership",
          "sole_proprietorship"
      ],
      "eligibilityStatus": "qualified_client"
  },
  {
      "id": 238,
      "title": "Entity that owns Investments as defined in Rule 2a51-1(b)",
      "text": "Any entity, including Indian tribes, governmental bodies, funds, and entities organized under the laws of foreign countries, that own “investments,” as defined in Rule 2a51-1(b) under the Investment Company Act, in excess of $5 million and that was not formed for the specific purpose of investing in the securities offered.",
      "ieTypes": [
          "trust",
          "llc",
          "lp",
          "fofllc",
          "foflp",
          "corporation",
          "pension_plan",
          "foundation",
          "endowment",
          "estate",
          "investment_club",
          "general_partnership",
          "sole_proprietorship"
      ],
      "eligibilityStatus": "accredited_investor"
  },
  {
      "id": 157,
      "title": "Has $250,000 Liquid Net Worth",
      "text": "The Investor has a liquid net worth of at least $250,000.",
      "ieTypes": [
          "trust",
          "llc",
          "lp",
          "fofllc",
          "foflp",
          "corporation",
          "pension_plan",
          "foundation",
          "endowment",
          "estate",
          "investment_club",
          "general_partnership",
          "sole_proprietorship"
      ],
      "eligibilityStatus": "income_and_net_worth_suitability"
  },
  {
      "id": 34,
      "title": "Entity owned entirely by Qualified Purchasers",
      "text": "A corporation, partnership, limited liability company, or other entity all of whose securities and other ownership interests are beneficially owned by Qualified Purchasers. (Note: no ownership interests may be held by non-Qualified Purchasers).",
      "ieTypes": [
          "llc",
          "lp",
          "fofllc",
          "foflp",
          "corporation",
          "pension_plan",
          "foundation",
          "endowment",
          "estate",
          "investment_club",
          "general_partnership",
          "sole_proprietorship"
      ],
      "eligibilityStatus": "qualified_purchaser"
  }
]

// filter qualifications for qualified_client eligibilityStatus
const qualified_client = qualifications.filter(qualification => qualification.eligibilityStatus === 'qualified_client').map(qualification => qualification.title);
