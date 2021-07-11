import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { volumeMuteOutline, musicalNotesOutline, apertureOutline, logoBitcoin,  } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={volumeMuteOutline} />
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={musicalNotesOutline} />
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={apertureOutline} />
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={logoBitcoin} />
              </IonButton>
          </IonButtons>



        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem routerLink="/games">
            <IonLabel>Games</IonLabel>
          </IonItem>
          <IonItem routerLink="/store">
            <IonLabel>Store</IonLabel>
          </IonItem>
          <IonItem routerLink="/earn">
            <IonLabel>Earn</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
