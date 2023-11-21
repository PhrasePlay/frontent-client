import { FaPlay } from 'react-icons/fa';
const frasesExemplo = [
  // Substitua por suas próprias frases
  {
    frase: 'Frase 1',
    autor: 'Autor 1',
    adicionado: '2 dias atrás',
    duracao: '3:15',
  },
  {
    frase: 'Frase 1',
    autor: 'Autor 1',
    adicionado: '2 dias atrás',
    duracao: '3:15',
  },
  {
    frase: 'Frase 1',
    autor: 'Autor 1',
    adicionado: '2 dias atrás',
    duracao: '3:15',
  },
  {
    frase: 'Frase 1',
    autor: 'Autor 1',
    adicionado: '2 dias atrás',
    duracao: '3:15',
  },
  // ... outras frases ...
];

export const PhraseCard = () => (
  <div className="bg-gray-800 p-8 min-h-screen">
    <ul>
      {frasesExemplo.map((item, index) => (
        <li
          key={index}
          className="flex p-2 rounded-md items-center justify-between text-white py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center">
            <div className="mr-4 flex items-center justify-center">
              <FaPlay />
            </div>
            <div>
              <p className="font-bold">{item.frase}</p>
              <p className="text-gray-400">{item.autor}</p>
            </div>
          </div>
          <div className="text-gray-400">{item.adicionado}</div>
          <div>{item.duracao}</div>
        </li>
      ))}
    </ul>
  </div>
);
