import  {createStore} from 'vuex'
const playerCard = {
    namespace: true,
    action:{

    },
    mutations:{

    },
    state(){
        return {
            cardList:[
                {
                    player:1,
                    card:[2,3,5]
                },
                {
                    player:2,
                    card:[6,7,8]
                },
                {
                    player:3,
                    card:[1,2,3]
                },
                {
                    player:4,
                    card:[4,5,6]
                },
            ]
        }
    }
}
const setting = {
    namespace: true,
    action:{

    },
    mutations:{

    },

    state(){
        return {
            playerNumber:5,
            roomId:123,
        }
    }
}
export const store = createStore({
    modules:{
        playerCard,
        setting,

    }
})