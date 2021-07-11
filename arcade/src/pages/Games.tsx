import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg} from "@ionic/react";
import './Games.css';

const Games: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Games</IonTitle>
                        <IonButtons slot="start">
                            <IonButton routerLink="/home">Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/301'></IonImg>
                            First Game
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/302'></IonImg>
                            Second Game
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/307'></IonImg>
                            Third Game
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/304'></IonImg>
                            Fourth Game
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Games;