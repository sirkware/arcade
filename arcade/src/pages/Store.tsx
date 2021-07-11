import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg} from "@ionic/react";
import './Store.css';

const Store: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Store</IonTitle>
                        <IonButtons slot="start">
                            <IonButton routerLink="/home">Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/301'></IonImg>
                            First Item
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/302'></IonImg>
                            Second Item
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/307'></IonImg>
                            Third Item
                        </IonCol>
                        <IonCol>
                            <IonImg src='http://placekitten.com/g/300/304'></IonImg>
                            Fourth Item
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Store;