import React, { useState } from 'react';
import StaffSidebar from '../components/StaffSidebar';
import TitleBar from '../components/TitleBar';
import CreateItem from '../crud/CreateItem';
import ReadItems from '../crud/ReadItems';
import UpdateItem from '../crud/UpdateItem';
import DeleteItem from '../crud/DeleteItem';
import Footer from '../components/Footer';
import '../styles/StaffPage.css';

function StaffPage() {
  const [selectedOperation, setSelectedOperation] = useState('read');

  return (
    <div className="dashboard-page">
      <TitleBar />
      <div className="dashboard-container">
        <StaffSidebar setSelectedOperation={setSelectedOperation} />
        <div className="main-content">
          {selectedOperation === 'create' && <CreateItem />}
          {selectedOperation === 'read' && <ReadItems />}
          {selectedOperation === 'update' && <UpdateItem />}
          {selectedOperation === 'delete' && <DeleteItem />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StaffPage;
