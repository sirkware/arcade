import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonImg } from '@ionic/react';
import './Home.css';


// START of copy-pasted code from ionimg page
type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
                       { src: 'http://placekitten.com/g/200/300', text: 'a picture of another cat' },
                       { src: 'http://placekitten.com/g/200/300', text: 'a picture of yet another cat' },];
//END of this block of copypasta

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gamer gaming moment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">IOS Title / condensed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {items.map((image, i) => (
            <IonItem key={i}>
              <IonThumbnail slot="start">
                <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>{image.text}</IonLabel>
            </IonItem>
      ))}
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
