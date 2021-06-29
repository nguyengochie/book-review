import React, { useContext } from 'react';
import { TabContext, TabPanel } from "@material-ui/lab";
import { MainTabs } from '../constants';
import { MainCtx } from '../../context/main/state';
import Contact from "../Contact/Contact";
import HomeContent from "../HomeContent/HomeContent";

const HomeContainer = () => {
  const { currentTab }: any = useContext(MainCtx);

  return (
    <div>
      <TabContext value={currentTab}>
        <TabPanel value={MainTabs.HOME}>
          <HomeContent />
        </TabPanel>

        <TabPanel value={MainTabs.BOOKS_LIST} >
          <p>list books</p>
        </TabPanel>

        <TabPanel value={MainTabs.ABOUT_US} >
          <Contact />
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default HomeContainer;