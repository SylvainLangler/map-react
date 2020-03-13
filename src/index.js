import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*

Créer une application react PWA qui affiche une carte et sur laquelle on peut ajouter/supprimer des points géographiques

Elle doit avoir un écran d'accueil avec un lien vers l'écran avec la map ( :thinking: Router ?)
Elle doit avoir un thème règlable de n'importe où sur l'application ( :thinking: Context ? )
Sur l'écran de map, on doit avoir 2 composants, une map et un bandeau au dessus de la map qui affiche le nombre de markers posés ( :thinking: State Complex ?)

*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
