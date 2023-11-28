import React from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import Header from '../Composant/Header'; // Import du composant Header
import './Annuaire.css'
import { Form, InputGroup } from 'react-bootstrap';
function Annuaire() {
  const [searchText, setSearchText] = React.useState(''); // État pour stocker le texte de recherche
  const handleSearch = () => {
    setGlobalFilter(searchText); // Appliquer le texte de recherche à la fonction setGlobalFilter
  };

  const data = React.useMemo(
    () => [
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Geano', prenom: 'Lorenzo', metier: 'Développeur', Téléphone: '0687501273', Mail: 'lorenzo.geano@laposte.net' },
      { nom: 'Houssaini', prenom: 'Nabil', metier: 'Développeur', Téléphone: '0687986594', Mail: 'nabil.houssaini@laposte.net' },
      { nom: 'Ben Ahmed', prenom: 'Rayane', metier: 'Développeur', Téléphone: '0687651273', Mail: 'rayane.BENAHMED@laposte.net' },
      { nom: 'Barar', prenom: 'Bilal', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Bilal.Barar@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },
      { nom: 'Wissam', prenom: 'Wissam', metier: 'Développeur', Téléphone: '0687501273', Mail: 'Wissam.Wissam@laposte.net' },


    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prénom',
        accessor: 'prenom',
      },
      {
        Header: 'Métier',
        accessor: 'metier',
      },
      {
        Header: 'Téléphone',
        accessor: 'Téléphone',
      },
      {
        Header: 'Mail',
        accessor: 'Mail',
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter); // Utilisation de useGlobalFilter

  const { globalFilter } = state;

  return (
    <div>
      <Header />

      {/* Nouveau bouton et champ de texte */}

      <div class="container_search+title">
        <h2>Annuaire</h2>    <div style={{ marginBottom: '10px' }}>
          <input
            value={searchText}
            placeholder="Rechercher dans le tableau..."
            style={{ marginRight: '10px' }}
          />
          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <button onClick={handleSearch} class="bouton_search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg></button>
        </div>
      </div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Annuaire;
