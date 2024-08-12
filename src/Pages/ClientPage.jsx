import React from 'react';
import ClientList from '../Components/ClientList';
import Sidebar from '../Components/Sidebar';

const ClientPage = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <ClientList />
    </div>
  );
};

export default ClientPage;
