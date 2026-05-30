
import {mosyStateManager} from '../../../MosyUtils/hiveUtils';

const defaultMessagesStateDefaults = {

  //state management for list page
  messagesListData : [],
  messagesListPageCount : 1,
  messagesLoading: true,  
  parentUseEffectKey : 'loadMessagesList',
  localEventSignature: 'loadMessagesList',
  messagesQuerySearchStr: '',

  
  //for profile page
  messagesNode : {},
  messagesActionStatus : 'add_messages',
  parammessagesUptoken  : '',
  snackMessage : '',
  snackOnDone : ()=>()=>{},
  messagesUptoken:'',
  messagesNode : {},
  activeScrollId : 'MessagesProfileTray',
  
  //dataScript
  messagesCustomProfileQuery : '',
  requestsCustomProfileQuery : ``,
staffCustomProfileQuery : ``,

  
  // ... other base defaults
};

export function useMessagesState(overrides = {}) {
  const combinedDefaults = { ...defaultMessagesStateDefaults, ...overrides };
  return mosyStateManager(combinedDefaults);
}

