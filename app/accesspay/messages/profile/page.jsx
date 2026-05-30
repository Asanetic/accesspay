import { Suspense } from 'react';

import MessagesProfile from '../uiControl/MessagesProfile';

import { InteprateMessagesEvent } from '../dataControl/MessagesRequestHandler';

import { hiveRoutes } from '../../../appConfigs/hiveRoutes';

export async function generateMetadata({ searchParams }) {
  const mosyTitle = "Messages "//searchParams?.mosyTitle || "Messages";

  return {
    title: mosyTitle ? decodeURIComponent(mosyTitle) : `Messages`,
    description: 'accesspay Messages',
    
    icons: {
      icon: `${hiveRoutes.hiveBaseRoute}/logo.png`
    },    
  };
}    
                      

export default function MessagesMainProfilePage() {

   return (
     <>
       <div className="main-wrapper">
          <div className="page-wrapper">
             <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
                 <MessagesProfile 
                    dataIn={{ parentUseEffectKey: "initMessagesProfile" }} 
                                           
                    dataOut={{
                       setChildDataOut: InteprateMessagesEvent
                    }}   
                    
                 />
               </Suspense>
             </div>
           </div>
         </div>
       </>
     );
}