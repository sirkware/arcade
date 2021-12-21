import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg} from "@ionic/react";
import BabylonTest from "../components/BabylonTest";
import DemoGame from "../components/DemoGame";
import './Demo.css';

const Demo: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Demo</IonTitle>
                        <IonButtons slot="start">
                            <IonButton routerLink="/games">Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <DemoGame></DemoGame>
            </IonContent>
        </IonPage>
    );
};

export default Demo;