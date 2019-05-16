import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import linda from '../../assets/linda.jpeg';
import bob from '../../assets/bob.jpeg';
import tina from '../../assets/tina.jpeg';
import gene from '../../assets/gene.jpeg';
import louise from '../../assets/louise.jpeg';

export default function App() {
  const photos = [
    linda,
    bob,
    tina,
    gene,
    louise
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Bobs Burgers" photos={photos} />
      <Footer />
    </>
  );
}
