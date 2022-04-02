import { async } from '@firebase/util'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, arrayUnion, updateDoc, arrayRemove, getDoc } from 'firebase/firestore'


function getDb() {

    const fireBaseApp = initializeApp({
        apiKey: process.env.FIREBASE_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    })
    
    return getFirestore(fireBaseApp)

}

export async function addWord(value) {
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'words')

    await updateDoc( doucmentRef, {
        words: arrayUnion(value)
    })
}

export async function iAmSorry(value) {
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'iAmSorry')

    await updateDoc( doucmentRef, {
        iAmSorry: arrayUnion(value)
    })
}

export async function removeWord(value) {
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'words')

    await updateDoc( doucmentRef, {
        words: arrayRemove(value)
    })
}

export async function getAllWords(){
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'words')
    let documentSnapshot = await getDoc(doucmentRef)

    return documentSnapshot.data()['words']
}

export async function getScores() {
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'highScore')
    let documentSnapshot = await getDoc(doucmentRef)

    return documentSnapshot.data()['highScore']
}

export async function addHighScore(value) {
    let db = getDb()

    let doucmentRef = doc(db, process.env.WORD_TABLE, 'highScore')

    await updateDoc( doucmentRef, {
        highScore: arrayUnion(value)
    })
}
