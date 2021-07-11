import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg} from "@ionic/react";
import './Earn.css';

const Earn: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Earn</IonTitle>
                        <IonButtons slot="start">
                            <IonButton routerLink="/home">Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/301'></IonImg>
                            First Listing
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/302'></IonImg>
                            Second Listing
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/307'></IonImg>
                            Third Listing
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/304'></IonImg>
                            Fourth Listing
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Earn;