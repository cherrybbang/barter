import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(""),  
    routes: [    
        {      
            path: "/",      
            name: "LogInPage",      
            component: () => import("@/views/LogInPage.vue"),    
        },
        {      
            path: "/join",      
            name: "JoinPage",      
            component: () => import("@/views/join/JoinPage.vue"),    
        },
        {      
            path: "/auth",      
            name: "AuthPage",      
            component: () => import("@/views/join/AuthPage.vue"),    
        },
        {      
            path: "/joinform",      
            name: "JoinForm",      
            component: () => import("@/views/join/JoinForm.vue"),    
        },
        {      
            path: "/joinend",      
            name: "JoinEnd",      
            component: () => import("@/views/join/JoinEnd.vue"),    
        },            
        {      
            path: "/findid",      
            name: "FindID",      
            component: () => import("@/views/find/FindID.vue"),    
        },   
        {      
            path: "/yourid",      
            name: "YourID",      
            component: () => import("@/views/find/YourID.vue"),    
        },    
        {      
            path: "/findpw",      
            name: "FindPW",      
            component: () => import("@/views/find/FindPW.vue"),    
        },   
        {      
            path: "/main",      
            name: "MainPage",      
            component: () => import("@/views/MainPage.vue"),    
        },      
        // {      
        //     path: "/",      
        //     name: "HelloWorld",      
        //     component: () => import("../components/HelloWorld.vue"),    
        // },  
        {      
            path: "/popup",      
            name: "Popup",      
            component: () => import("@/components/PopCoupon.vue"),    
        },     
        {      
            path: "/qrscan",      
            name: "QRScan",      
            component: () => import("@/components/QrScan.vue"),    
        },   
        {      
            path: "/cmlist",      
            name: "CMList",      
            component: () => import("@/views/CMList.vue"),    
        },      
        {      
            path: "/footer",      
            name: "Footer",      
            component: () => import("@/components/FooterPage.vue"),    
        },   
        {      
            path: "/test",      
            name: "TestingPinia",      
            component: () => import("@/views/TestingPinia.vue"),    
        },      
        {      
            path: "/testing",      
            name: "PractuceExe",      
            component: () => import("@/views/PracticIng.vue"),    
        },     
        {      
            path: "/paging",      
            name: "TestingPage",      
            component: () => import("@/components/TestingPage.vue"),    
        },     
        {      
            path: "/mypage1",      
            name: "mypage1",      
            component: () => import("@/views/Mypage1.vue"),    
        },     
        {      
            path: "/changepw",      
            name: "changePassword",      
            component: () => import("@/views/ChangePw.vue"),    
        }, 
        {      
            path: "/ChangePin1",      
            name: "ChangePin1",      
            component: () => import("@/views/ChangePin1.vue"),    
        }  ,
        {      
            path: "/ChangePin2",      
            name: "ChangePin2",      
            component: () => import("@/views/ChangePin2.vue"),    
        } ,
        {      
            path: "/ChangePin3",      
            name: "ChangePin3",      
            component: () => import("@/views/ChangePin3.vue"),    
        }  ,
        {      
            path: "/ChangePin4",      
            name: "ChangePin4",      
            component: () => import("@/views/ChangePin4.vue"),    
        }  ,
        {      
            path: "/Notice",      
            name: "NoticePage",      
            component: () => import("@/views/NoticePage.vue"),    
        }  ,
        {      
            path: "/DetailPgae/:id",      
            name: "DetailPgae",      
            component: () => import("@/views/DetailPgae.vue"),    
        }  ,
        {      
            path: "/Inquiry",      
            name: "InquiryPage",      
            component: () => import("@/views/InquiryPage.vue"),    
        }  ,
        {      
            path: "/InquiryList",      
            name: "InquiryList",      
            component: () => import("@/views/InquiryList.vue"),    
        }  ,
        {      
            path: "/InquiryListDetail/:id",      
            name: "InquiryListDetail",      
            component: () => import("@/views/InquiryListDetail.vue"),    
        }  ,

        {      
            path: "/Terms",      
            name: "TermsPage",      
            component: () => import("@/views/TermsPage.vue"),    
        }  ,
        {
            path: '/Terms/userService',
            name:'userService',
            component:()=> import("@/views/UeserService.vue")
        },
        {
            path: '/Terms/Franchiseeprivacy',
            name:'franchisee_privacy',
            component:()=> import("@/views/FranchiseePrivacy.vue")
        },
        {
            path: '/Terms/FranchiseeMarketing',
            name:'franchisee_Marketing',
            component:()=> import("@/views/FranchiseeMarketing.vue")
        },
        {
            path: '/Terms/FranchiseeAdvertisement',
            name:'franchisee_Advertisement',
            component:()=> import("@/views/franchiseeAdvertisement.vue")
        },
        {
            path: '/Terms/FranchiseeLocation',
            name:'franchisee_location',
            component:()=> import("@/views/franchiseeLocation.vue")
        },  {
            path: '/cmHistroy',
            name:'cm_history',
            component:()=> import("@/views/CmHistroy.vue")
        }




    ],
}); 

export default router;