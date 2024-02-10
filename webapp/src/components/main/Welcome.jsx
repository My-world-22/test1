import { useState } from 'react';
import {Alert, Button }from 'react-bootstrap';

function Welcome() {
    const[show, setShow] = useState(true)
    return (
        <Alert show={show} variant="success" className='text-center mb-0'>
            <Alert.Heading>Hey, sono felice di trovarti qui!</Alert.Heading>
            <p>
               
            </p>
            <hr />
            <p className="mb-0">
                Questo è un sito a scopo didattico l'autore del sito vi informa che : 
                gli utenti riconoscono che l'utilizzo del sito avviene a proprio esclusivo
                rischio. Il sito web viene fornito così “come è” e “come disponibile”.
                non caricare, pubblicare, inviare privatamente o in altro modo trasmettere o diffondere contenuti
                 che siano illeciti, dannosi, minatori, abusivi, molesti, diffamatori e/o calunniosi, volgari, 
                osceni, lesivi della privacy altrui, razzisti, classisti o comunque reprensibili
            </p>
            <br/>
          <Button onClick={() => setShow(false)} variant="outline-success">
            Nascondi
          </Button>
        </Alert>
    );
}

export default Welcome;
