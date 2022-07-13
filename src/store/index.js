import  {createStore} from 'vuex'
const playerCard = {
    namespace: true,
    actions:{

    },
    mutations:{

    },
    state(){
        return {
            //player 是player Id
            cardList:[
                {
                    player:1,
                    card:[2,3,5,3,1]
                },
                {
                    player:4,
                    card:[6,7,8,3,1]
                },
                {
                    player:2,
                    card:[1,2,3,3,1]
                }
            ]
        }
    }
}
const setting = {
    namespace: true,
    actions:{
        setRandomRoomId(ctx){
            let randomID = ''
            let list = [1,2,3,4,5,6,7,8,9]
            for (let i = 0; i < 4; i++) {
                randomID += list[Math.round(Math.random() * 8)]
            }
            ctx.commit('SET_ROOM_ID',randomID)
        },
        getPlayerId(ctx,value){
            //获取playerId
        }
    },
    mutations:{
        SET_PLAYER_NUMBER(state,value){
            state.playerNumber = value
        },
        SET_ROOM_ID(state,value){
            state.roomId = value
        },
        SET_PLAYER_ID(state,value){
            state.playerId = value
        }
    },

    state(){
        return {
            playerNumber:0,
            roomId:0,
            playerId:1
        }
    }
}
const boardCredit = {
    namespace: true,
    actions:{

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
    actions:{

    },
    mutations:{
        //确定出牌后运行这个
        OPEN_CARD(state){
            state.showCard = true
            state.isPlayCard = true
            state.isMyTurn = false
        },
        //结束回合运行这个
        END_MY_TURN(state){
            state.showCard = false
            state.isPlayCard = false
        },
    },
    state(){
        return {
            //展示卡片
            showCard:false,
            cardType:1,
            //是否出牌
            isPlayCard:false,
            //是不是我的回合？
            isMyTurn:true
        }
    }
}
const waitingRoom = {
    actions:{

    },
    mutations:{
        CLOSER_WAITING_ROOM(state){
            state.showWaitingInfo = false
        },
        OPEN_WAITING_ROOM(state){
            state.showWaitingInfo = true
        }
    },
    state(){
        return {
            showWaitingInfo:false,
            currentPlayerNumber:0
        }

    }
}

export const store = createStore({
    modules:{
        playerCard,
        setting,
        boardCredit,
        centerShowCard,
        waitingRoom
    }
})