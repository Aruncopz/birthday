import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"birthday-mash","appId":"1:667604931028:web:302cc43db901f9f148c641","storageBucket":"birthday-mash.appspot.com","apiKey":"AIzaSyD6pDIxWFKwty4hLNEGIqnYobjI5NBt4-I","authDomain":"birthday-mash.firebaseapp.com","messagingSenderId":"667604931028","measurementId":"G-GZD4YZD38Y"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"birthday-mash","appId":"1:667604931028:web:302cc43db901f9f148c641","storageBucket":"birthday-mash.appspot.com","apiKey":"AIzaSyD6pDIxWFKwty4hLNEGIqnYobjI5NBt4-I","authDomain":"birthday-mash.firebaseapp.com","messagingSenderId":"667604931028","measurementId":"G-GZD4YZD38Y"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"birthday-mash","appId":"1:667604931028:web:302cc43db901f9f148c641","storageBucket":"birthday-mash.appspot.com","apiKey":"AIzaSyD6pDIxWFKwty4hLNEGIqnYobjI5NBt4-I","authDomain":"birthday-mash.firebaseapp.com","messagingSenderId":"667604931028","measurementId":"G-GZD4YZD38Y"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"birthday-mash","appId":"1:667604931028:web:302cc43db901f9f148c641","databaseURL":"https://birthday-mash-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"birthday-mash.appspot.com","apiKey":"AIzaSyD6pDIxWFKwty4hLNEGIqnYobjI5NBt4-I","authDomain":"birthday-mash.firebaseapp.com","messagingSenderId":"667604931028","measurementId":"G-GZD4YZD38Y"})), provideFirestore(() => getFirestore())]
};
