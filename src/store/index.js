import  {createStore} from 'vuex'
const playerCard = {
    namespace: true,
    action:{

    },
    mutations:{

    },
    state(){
        return {
            //player 是player Id
            cardList:[
                {
                    player:1,
                    card:[2,3,5]
                },
                {
                    player:4,
                    card:[6,7,8]
                },
                {
                    player:2,
                    card:[1,2,3]
                }
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
            playerId:2
        }
    }
}
const boardCredit = {
    namespace: true,
    action:{

    },
    mutations:{

    },
    state(){
        return {
            cardTypeNumberList:[
                {
                    type:1,
                    number:2,
                    fill:0,
                    isChoose:false
                },
                {
                    type:2,
                    number:2,
                    fill:0,
                    isChoose:false
                },
                {
                    type:3,
                    number:3,
                    fill:0,
                    isChoose:false
                },
                {
                    type:4,
                    number:3,
                    fill:0,
                    isChoose:false
                },
                {
                    type:5,
                    number:3,
                    fill:0,
                    isChoose:false
                },
                {
                    type:6,
                    number:4,
                    fill:0,
                    isChoose:false
                },
                {
                    type:7,
                    number:4,
                    fill:0,
                    isChoose:false
                },
                {
                    type:8,
                    number:4,
                    fill:0,
                    isChoose:false
                },
                {
                    type:9,
                    number:4,
                    fill:0,
                    isChoose:false
                },
            ]
        }
    }
}
const centerShowCard = {
    action:{

    },
    mutations:{
        OPEN_CARD(state){
            state.showCard = true
            this.state.isMyTurn = false
        },
        ClOSE_CARD(state){
            state.showCard = false
        },
    },
    state(){
        return {
            showCard:false,
            cardType:1,
            isMyTurn:true
        }
    }
}
export const store = createStore({
    modules:{
        playerCard,
        setting,
        boardCredit,
        centerShowCard
    }
})