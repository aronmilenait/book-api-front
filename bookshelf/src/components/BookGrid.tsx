import { Book } from "../api/bookapi";

interface BookGridProps {
  books: Book[];
}

const BookGrid = ({ books }: BookGridProps) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="p-4 bg-sky-100 shadow rounded">
            <p className="text-lg text-sky-600 font-semibold mb-2">{book.title}</p>
            <p className="text-sm text-sky-600 mb-2">{book.author}</p>
            <p className="text-sm text-sky-800">{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
