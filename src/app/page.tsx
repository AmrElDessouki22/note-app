import NewNoteForm from '../components/features/NewNoteForm';
import NoteList from '../components/features/NoteList';
import { NotesProvider } from '../contexts/NotesContext';

const Page = () => {
  return (
    <NotesProvider>
      <div className="app-container">
        <NewNoteForm />
        <NoteList />
      </div>
    </NotesProvider>
  );
};

export default Page;
