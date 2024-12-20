import PhotoTab from './tabs/photo-tab';
import EventTab from './tabs/event-tab';
import SavedTab from './tabs/saved-tab';
import { useState } from 'react';
import { Tab } from '../../../common/tab';

enum ProfileTabsType {
  PHOTO_TAB = 'PHOTO_TAB',
  EVENT_TAB = 'EVENT_TAB',
  SAVED_TAB = 'SAVED_TAB',
}

const tabs = [
  {
    tabKey: ProfileTabsType.PHOTO_TAB,
    tabName: 'Photos',
  },
  {
    tabKey: ProfileTabsType.EVENT_TAB,
    tabName: 'Events',
  },
  {
    tabKey: ProfileTabsType.SAVED_TAB,
    tabName: 'Saved',
  },
];
export default function Example({ username }: { username: string }) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].tabKey);

  return (
    <>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      {activeTab === ProfileTabsType.EVENT_TAB && <EventTab />}
      {activeTab === ProfileTabsType.PHOTO_TAB && <PhotoTab username={username} />}
      {activeTab === ProfileTabsType.SAVED_TAB && <SavedTab />}
    </>
  );
}
