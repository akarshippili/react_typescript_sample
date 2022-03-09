import './App.css';
import { SetStateAction, useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import { Event } from './Event';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [ showModal, setModal ] = useState<boolean>(false)

  const handleDelete = (id:number) => {
    setEvents(
      (prevEvents) => {
        return prevEvents.filter(event => event.id !== id);
      });
  }

  const handleAddEvent = (newEvent:Event) => {
    setEvents((prevEvents) => {
        return [...prevEvents, newEvent];
    });

    setModal(false);
  }


  return (
    <div className="App">
      
      <Title title="Mario Kingdom Evets" subtitle="All the latest events in mario kingdom" />
      
      { showEvents && (
        <div>
          <button onClick={ () => setShowEvents(false) }>
            Hide Events
          </button> 
        </div>
      )}
      
      { !showEvents && (
        <div>
          <button onClick={ () => setShowEvents(true) }>
            Show Events
          </button> 
        </div>
      )}

      <button onClick={()=>setModal(true)}>Add New Event</button>

      {showEvents &&  <EventList events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal isSalesModal={true} >
          <NewEventForm handleAddEvent={handleAddEvent}  />
        </Modal>
      )}

    </div>
  );
}

export default App;
