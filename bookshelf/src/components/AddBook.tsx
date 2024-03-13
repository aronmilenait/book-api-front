import { useState, ChangeEvent } from "react";
import { Book, create } from "../api/bookapi";

interface AddBookProps {
  onAddBook: (book: Book) => void;
}

function AddBook({ onAddBook }: AddBookProps) {
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    description: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAddBook = async () => {
    try {
      const createdBook = await create(newBook);
      onAddBook(createdBook);
      setNewBook({
        id: 0,
        title: "",
        author: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };

  return (
    <section
      id="add-first-book"
      className="p-4 bg-sky-100 flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-sky-800">Add First Book</h2>

        <div className="mb-4 w-full max-w-md">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4 w-full max-w-md">
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4 w-full max-w-md">
          <textarea
            name="description"
            placeholder="Description (optional)"
            value={newBook.description}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <button
          onClick={handleAddBook}
          className="bg-sky-800 text-white py-2 px-4 rounded hover:bg-sky-900"
        >
          Add Book
        </button>
      </div>
    </section>
  );
}

export default AddBook;
