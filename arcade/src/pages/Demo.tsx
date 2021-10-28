import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg} from "@ionic/react";
import './Demo.css';

const Demo: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Demo</IonTitle>
                        <IonButtons slot="start">
                            <IonButton routerLink="/home">Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
            
        </IonPage>
    );
};

export default Demo;