import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>UGOP ASSOCIATION</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/equipe-PAV.png'
              text='Autour de Salima et Oswald, une équipe dynamique vous accompagne au travers des activités proposées au Pavillon Culturel.'
              label='NOTRE BELLE ÉQUIPE'
              path='/services'
            />
            <CardItem
              src='images/collectif-Artisis.png'
              text='Le collectif Artisis est un groupe engagé fédérant des parcours pluriels d’artistes, musiciens, comédiens, plasticiens, chercheurs, producteurs qui souhaitent participer activement à imaginer les mondes de demain'
              label='LE COLLECTIF ARTISIS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ecole.png'
              text='L’école Saint Eloi nous a réservé leur plus belle musique.'
              label='MUSIQUE'
              path='/services'
            />
            <CardItem
              src='images/tables-rondes.jpg'
              text='Découvrez des sujets importants à travers nos reportages.'
              label='LES TABLES RONDES'
              path='/products'
            />
            <CardItem
              src='images/couv.png'
              text='Le Pavillon Culturel propose de nombreuses activités intergenérationnelles, artistiques et culturelles​ via le numérique.'
              label='NOS ACTIVITÉS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
