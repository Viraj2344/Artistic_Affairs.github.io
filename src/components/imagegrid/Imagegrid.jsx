import React from 'react';

const ImageGrid = () => {
  // You can replace these image URLs and links with your own data.
  const images = [
    { src: 'https://scontent.cdninstagram.com/v/t39.30808-6/376580618_17973549083578311_4034563242746586512_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ5eDE2ODcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=4Y6GjvX2BkQAX-nbNXh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4Nzg0OTYwNzUxMjE4NjMwMg%3D%3D.2-ccb7-5&oh=00_AfCEI43gTeWrXH1bkp-0VwoUPxdfJvW8TEoMo-8YiDBh4Q&oe=65337C77&_nc_sid=10d13b', link: 'https://example.com/link1' },
    { src: 'https://scontent.cdninstagram.com/v/t39.30808-6/376580618_17973549083578311_4034563242746586512_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ5eDE2ODcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=4Y6GjvX2BkQAX-nbNXh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4Nzg0OTYwNzUxMjE4NjMwMg%3D%3D.2-ccb7-5&oh=00_AfCEI43gTeWrXH1bkp-0VwoUPxdfJvW8TEoMo-8YiDBh4Q&oe=65337C77&_nc_sid=10d13b', link: 'https://example.com/link2' },
    { src: 'https://scontent.cdninstagram.com/v/t39.30808-6/376580618_17973549083578311_4034563242746586512_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ5eDE2ODcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=4Y6GjvX2BkQAX-nbNXh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4Nzg0OTYwNzUxMjE4NjMwMg%3D%3D.2-ccb7-5&oh=00_AfCEI43gTeWrXH1bkp-0VwoUPxdfJvW8TEoMo-8YiDBh4Q&oe=65337C77&_nc_sid=10d13b', link: 'https://example.com/link3' },
    { src: 'https://scontent.cdninstagram.com/v/t39.30808-6/376580618_17973549083578311_4034563242746586512_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzQ5eDE2ODcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=4Y6GjvX2BkQAX-nbNXh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4Nzg0OTYwNzUxMjE4NjMwMg%3D%3D.2-ccb7-5&oh=00_AfCEI43gTeWrXH1bkp-0VwoUPxdfJvW8TEoMo-8YiDBh4Q&oe=65337C77&_nc_sid=10d13b', link: 'https://example.com/link4' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-4">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden bg-gray-100 hover:bg-gray-300 rounded-lg transition duration-300 transform hover:scale-105 md:col-span-1"
          style={{ height: '100%' }} // Set a fixed height
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover" // Use object-cover to fit the image within the fixed height
          />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
