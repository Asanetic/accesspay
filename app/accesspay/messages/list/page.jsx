import { Suspense } from 'react';

import MessagesList from '../uiControl/MessagesList';

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

export default function MessagesMainListPage() {

return (
        <>
         <div className="main-wrapper">
           <div className="page-wrapper">
              <div className="content container-fluid p-0 m-0 ">
               <Suspense fallback={<div className="col-md-12 p-5 text-center h3">Loading...</div>}>
               
                    <MessagesList  
                    
                     dataIn={{ parentUseEffectKey: "loadMessagesList" }}
                       
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