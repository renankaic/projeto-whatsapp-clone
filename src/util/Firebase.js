const firebase = require('firebase')
require('firebase/firestore')

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyAWYiSqwJff4EO_ib6DuDvFcgzhWYHcAs8",
            authDomain: "whatsapp-clone-b9f42.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b9f42.firebaseio.com",
            projectId: "whatsapp-clone-b9f42",
            storageBucket: "whatsapp-clone-b9f42.appspot.com",
            messagingSenderId: "470302200210",
            appId: "1:470302200210:web:c1d1bfd2f103e25dd9714b"
        }

        this.init()

    }   

    init() {

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config)

            firebase.firestore().settings({})

            window._initializedFirebase = true

        }


    }

    static db() {

        return firebase.firestore()

    }

    static hd() {

        return firebase.storage()

    }

    initAuth() {

        return new Promise((success, fail) => {

            let provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    const token = result.credential.accessToken
                    const user = result.user

                    success({
                        user,
                        token
                    })

                })
                .catch(err => fail(err))

        })

    }

}