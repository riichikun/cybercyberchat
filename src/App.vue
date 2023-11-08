
<template>
    <div class="bg-green-100 w-[100%] h-[100%]" v-if="state.signing == false">
        <div id="login__block" v-if="state.username == ''" className="m-[10%] mt-[20%] ">
            <div class="main-block flex border-black border-2 border-l-4 border-b-4  ">
                <div className="border-r border-r-black border-r-2 py-[30px] px-[10%] w-[50%] bg-[#fff]">
                    <h1 className="text-[#19B] text-[12px] lg:text-[24px]">Hey there!</h1>
                    <h2 class="text-[12px] lg:text-[24px]">Yeah, you. Are you ready for a good time, kid?</h2>
                </div>
                <form @submit.prevent="Login" className="bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F032%2F476%2F827%2Foriginal%2Fgeometric-shapes-and-figures-seamless-pattern-in-trendy-neobrutalism-style-y2k-brutal-figure-background-vector.jpg&f=1&nofb=1&ipt=9dd85fe9f0ca63fa4d132731bbc7cc741b8cb51df802fa89485930932209f8b8&ipo=images)] flex flex-col sm:flex-row sm:items-center sm:gap-[10%] w-[50%]  sm:w-[100%] pb-[0px] sm:py-[7%] md:py-[3%]  sm:px-[10%]" >
                        <input className="border border-black w-[60%] sm:w-[50%] m-auto my-[10%] sm:m-0 sm:w-[45%] h-[50px]  lg:text-[24px]" type="email" v-model="email" placeholder="email">
                        <input className="border border-black w-[60%] sm:w-[50%] m-auto my-[10%] sm:m-0 sm:w-[45%] h-[50px]  lg:text-[24px]" type="password" v-model="password"  placeholder="password">
                        <input @click="Login" className="text-[15px] text-white bg-[#000]  w-[100%] sm:w-[45%] h-[50%] sm:h-[50px] font-[400] lg:text-[24px]" type="submit" value="Let's go ;]">
                </form>
            </div>
            <button @click="state.signing=true" className="w-[50%] sm:w-[20%] ml-[50%] mt-[10px] sm:ml-[80%] h-[60px] text-[11px] sm:text-[14px] md:text-[18px] lg:text-[24px] text-white bg-yellow-500 border-black border-r-2 border-l-4 border-b-4 font-[400] rounded-xl">Not with us yet?</button>
        </div>
        <div id="chat__block" v-else className="m-[50px] flex flex-col gap-[15px]">
            <div class="chat-header flex items-center">
                <h1 class=" w-[50%] sm:w-[80%] text-[14px] sm:text-[24px]">Happy chatting, {{ state.username }}!</h1>
                <button @click="Logout" className="w-[50%] sm:w-[20%] h-[60px] text-[11px] sm:text-[14px] md:text-[18px] lg:text-[24px] text-white bg-[#000] font-[400]">Log out</button>
            </div>
            <section ref='chatbox' class="chatbox h-[500px] overflow-scroll border border-green-400 border-2 border-l-4 border-b-4 rounded-xl">
                <div v-for="message in state.messages" :bind="message.key">
                    <div class="message-inner border border-yellow-300 bg-yellow-100 ">
                        <div class="text-[18px]">{{ message.content }}</div>
                        <div class="text-blue-500 text-[14px] font-[900]">{{ message.username }}</div>
                    </div>
                </div>
            </section>
            <footer>
                <form @submit.prevent="SendMessage" class="flex gap-[10px]">
                    <input class="border border-red-500 h-[50px] w-[50%] md:w-[300px]" type="text" v-model="inputMessage">
                    <input @click="SendMessage" class="border border-red-500 h-[50px] w-[50%] md:w-[100px]" type="submit" value="Send">
                </form>
            </footer>
        </div>
    </div>
    <div class="bg-green-100 w-[100%] h-[100%] " v-else>
        <div class="m-[10%] mt-[15%] ">
            <div class='main-block h-[100%] flex flex-col sm:flex-row  border-black border-2 border-l-4 border-b-4'>
                <div class="flex items-center font-[800] border-b border-b-black border-b-2 sm:border-r sm:border-r-black sm:border-r-2 py-[30px] px-[10%] sm:w-[50%] bg-[#fff] text-[#19B] text-[12px] lg:text-[24px]">
                    <div class="w-[100%] sm:h-fit-content">
                        <p class="h-fit-content">Then let's create the account</p>
                    </div>
                </div>
                <form @submit.prevent="Register" class="bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F032%2F476%2F835%2Foriginal%2Fdirection-indicators-seamless-pattern-naive-playful-arrow-pointers-with-texture-in-trendy-retro-style-y2k-aesthetic-dynamic-arrow-signs-for-design-vector.jpg&f=1&nofb=1&ipt=5e7d51a22629f418724059f4eb41ad1e33dc6d230f38aae10a790edefa0b4608&ipo=images)] flex flex-col gap-[10px] px-[25%] sm:px-[10%] py-[5%] h-[50%] sm:h-[100%] w-[100%] sm:w-[50%]">
                    <input type="text" placeholder="Name" class="border border-black h-[50px] sm:w-[50%] md:w-[100%]" v-model="username">
                    <input type="email" placeholder="Email" class="border border-black h-[50px] sm:w-[50%] md:w-[100%]" v-model="email">
                    <input type="password" placeholder="Password" class="border border-black h-[50px] sm:w-[50%] md:w-[100%]" v-model="password">
                    <input @click="Register" type="submit" value="Submit" class='bg-white border border-black h-[50px] sm:w-[50%] md:w-[100%]  py-[10px] font-[800]' >
                </form>
            </div>
            <button @click="state.signing=false" className="w-[50%] sm:w-[20%]  ml-[50%] mt-[10px] sm:ml-[80%] h-fit-content text-[11px] sm:text-[14px] md:text-[18px] lg:text-[24px] text-white bg-yellow-500 border-black border-r-2 border-l-4 border-b-4 font-[400] rounded-xl">No, I'm alrealy signed up!</button>
        </div>
        
    </div>
</template>


<script lang="ts">
import { reactive, onMounted, nextTick, ref } from 'vue';
import { app, db, set, dbref, dbpush} from './firebase'
import { onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


export default {
    setup() {
        const username = ref("")
        const email = ref("");
        const password = ref("")
        const inputUsername = ref("");
        const inputMessage = ref("");

        const auth :any = getAuth(app)

        const state:{username: string, messages: Array<any>, signing: boolean} = reactive({
            username: '',
            messages: [],
            signing: false,
        })

        





        const Register = () => {
            const fsref = getFirestore()
            //const user = auth.currentUser
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((e) => {
                updateProfile(auth.currentUser, {
                    displayName: username.value
               })
               
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
            
        }

        const Login = () => {
                //const user = auth.currentUser;
                setPersistence(auth, browserLocalPersistence).then(() => {
                    signInWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    if(auth.currentUser) state.username = auth.currentUser.displayName 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
                })
                ;
                

                
            console.log('Well done')
        }

        const Logout = () => {
            state.username = '';
         }


        const SendMessage = () => {
            if(inputMessage.value == '') {
                return
            }
            const message: {key: any, username: string, content: any} = {
                key: '',
                username: state.username,
                content: inputMessage.value,
            }

            const messagesListRef = dbref(db, 'messages');
            const newMessageRef = dbpush(messagesListRef);
            set(newMessageRef, message)
            inputMessage.value = '';
        }

       
       
                
        onMounted(() => {

            // making chatbox scrolled down by default
            
/*
            setTimeout(() => {
                let chatbox_ = document.querySelector('.chatbox')
                let scrollHeight = chatbox_.scrollHeight
                chatbox_.scrollTop = scrollHeight
            }, 650)

            */
            


            
            const messagesListRef = dbref(db, 'messages');
            onValue(messagesListRef, async (snapshot) => {
                const data = snapshot.val()
                let messages: any[] = [];

                await Object.keys(data).forEach(key => {
                    messages.push({id: key, username: data[key].username, content: data[key].content})
                });
                state.messages = messages;

                setTimeout(() => {
                    let chatbox_ :any = document.querySelector('.chatbox')
                    let scrollHeight = chatbox_?.scrollHeight
                    if(chatbox_) chatbox_.scrollTop = scrollHeight
                })
            
            
                
                   
              
                
         

            })
        })


        
        return {
            state,
            inputUsername,
            inputMessage,
            username, 
            email,
            password,
            Login,
            Logout,
            Register,
            SendMessage
        }
      
    },
}
</script>