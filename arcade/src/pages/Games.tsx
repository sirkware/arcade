import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from "@ionic/react";
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
                            <IonCard button routerLink="/demo">
                                <IonCardHeader>
                                    <IonCardSubtitle>Very Cool!</IonCardSubtitle>
                                    <IonCardTitle>Demo Game</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonImg src='http://placekitten.com/g/300/301'></IonImg>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Second Game</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonImg src='http://placekitten.com/g/300/303'></IonImg>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Third Game</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonImg src='http://placekitten.com/g/300/308'></IonImg>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Fourth Game</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonImg src='http://placekitten.com/g/300/305'></IonImg>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Games;